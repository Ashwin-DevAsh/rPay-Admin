import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../login/LoginService';
import { UserService } from '../UserService';
import { transition } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class UserTransactionsService {
  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) {}
  transactions: Array<any>;
  page: number = 0;
  allTransactions: Array<any>;
  transactionsPerpage = 20;
  balance = '0';

  async getTransactions() {
    var response;
    try {
      response = await axios.get(
        this.loginService.url +
          'getMyTransactions/' +
          this.userService.selectedUser.number,
        {
          headers: { token: this.loginService.token },
        }
      );

      this.allTransactions = response.data.rows;
      this.transactionsPerpage = this.allTransactions.length;
      this.balance = this.numberWithCommas(response.data.balance);
      console.log(this.allTransactions);
    } catch (e) {
      response = { data: { err: e } };
      this.allTransactions = [];
    }
    console.log(response);
  }

  numberWithCommas(x: string) {
    try {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } catch {
      return x;
    }
  }

  getNext(isMove = false): Array<any> {
    this.transactions = [];
    for (var i = this.allTransactions.length - 1; i >= 0; i--) {
      this.transactions.push({
        index: i + 1,
        name:
          this.userService.selectedUser.number == this.allTransactions[i].fromid
            ? this.allTransactions[i].toname
            : this.allTransactions[i].fromname,
        amount:
          this.userService.selectedUser.number == this.allTransactions[i].fromid
            ? '-' + this.allTransactions[i].amount + '.00'
            : '+' + this.allTransactions[i].amount + '.00',
        number:
          this.userService.selectedUser.number == this.allTransactions[i].fromid
            ? (this.allTransactions[i].isgenerated ? '' : '+') +
              this.allTransactions[i].toid
            : (this.allTransactions[i].isgenerated ? '' : '+') +
              this.allTransactions[i].fromid,
        transactiontime: this.allTransactions[i].transactiontime,
        isSend:
          this.userService.selectedUser.number ==
          this.allTransactions[i].fromid,
        isGenerated: this.allTransactions[i].isgenerated,
        transactionid: this.allTransactions[i].transactionid,
      });
    }

    return this.transactions;
  }
}
