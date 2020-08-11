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
  allTransactionsTemp: Array<any>;

  async getTransactions() {
    var response;
    try {
      response = await axios.get(this.loginService.url + 'getTransactions', {
        headers: { token: this.loginService.token },
      });

      this.allTransactions = response.data.rows;
      this.allTransactionsTemp = response.data.rows;
      console.log(this.allTransactions);
    } catch (e) {
      response = { data: { err: e } };
      this.allTransactions = [];
      this.allTransactionsTemp = [];
    }
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
        index: i + 1,
        transactionid: this.allTransactions[i].transactionid,
        amount: this.allTransactions[i].amount + '.00',
        frommetadata: this.allTransactions[i].frommetadata,
        tometadata: this.allTransactions[i].tometadata,
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
        index: i + 1,
        transactionid: this.allTransactions[i].transactionid,
        amount: this.allTransactions[i].amount + '.00',
        frommetadata: this.allTransactions[i].frommetadata,
        tometadata: this.allTransactions[i].tometadata,
        transactiontime: this.allTransactions[i].transactiontime,
      });
    }
    return this.transactions;
  }

  filter(query: string) {
    this.page = 0;
    if (query == '') {
      this.allTransactions = this.allTransactionsTemp;
      return;
    }

    var index = Number.parseInt(query);
    if (!index) {
      this.allTransactions = [];
      return;
    }

    console.log(index);
    this.allTransactions = [];

    for (var i = 0; i < this.allTransactionsTemp.length; i++) {
      console.log(i, this.allTransactionsTemp[i].transactionid);
      try {
        if (
          Number.parseInt(this.allTransactionsTemp[i].transactionid) === index
        ) {
          this.allTransactions.push(this.allTransactionsTemp[i]);
        }
      } catch {}
    }
  }
}
