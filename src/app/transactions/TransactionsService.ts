import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../login/LoginService';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private loginService: LoginService) {}

  transactions: Array<any>;
  page: number = 0;
  allTransactions: Array<any>;

  async getTransactions() {
    var response;
    try {
      response = await axios.get(this.loginService.url + 'getTransactions', {
        headers: { token: this.loginService.token },
      });

      this.allTransactions = response.data.rows;
      console.log(this.allTransactions);
    } catch (e) {
      response = { data: { err: e } };
      this.allTransactions = [];
    }
    console.log(response);
  }

  getNext(isMove = false): Array<any> {
    if (
      isMove &&
      this.transactions[this.transactions.length - 1].transactionid > 1
    )
      this.page += 1;

    this.transactions = [];
    for (
      var i = this.allTransactions.length - this.page * 25 - 1;
      i >= this.allTransactions.length - this.page * 25 - 1 - 25 && i >= 0;
      i--
    ) {
      this.transactions.push({
        transactionid: this.allTransactions[i].transactionid,
        amount: this.allTransactions[i].amount + '.00',
        fromid:
          (!this.allTransactions[i].isgenerated ? '+' : '') +
          this.allTransactions[i].fromid,
        toid: '+' + this.allTransactions[i].toid,
        transactiontime: this.allTransactions[i].transactiontime,
      });
    }

    return this.transactions;
  }

  getPrev(): Array<any> {
    if (this.page > 0) this.page -= 1;
    this.transactions = [];
    for (
      var i = this.allTransactions.length - this.page * 25 - 1;
      i >= this.allTransactions.length - this.page * 25 - 1 - 25;
      i--
    ) {
      this.transactions.push({
        transactionid: this.allTransactions[i].transactionid,
        amount: this.allTransactions[i].amount + '.00',
        fromid: '+' + this.allTransactions[i].fromid,
        toid: '+' + this.allTransactions[i].toid,
        transactiontime: this.allTransactions[i].transactiontime,
      });
    }

    return this.transactions;
  }
}
