import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './TransactionsService';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  pageStatus = 'Showing 0 to 0 of 0';

  constructor(public transactionService: TransactionsService) {}

  transactions = [];
  isLoading = true;

  paymentId = [];

  async ngOnInit() {
    await this.transactionService.getTransactions();
    this.transactions = this.transactionService.getNext();
    console.log(this.transactions[0].tometadata);

    this.loadStatus();

    this.isLoading = false;
  }

  nav(next = true) {
    this.isLoading = true;
    if (next) {
      this.transactions = this.transactionService.getNext(true);
    } else {
      this.transactions = this.transactionService.getPrev();
    }
    this.loadStatus();
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  loadStatus() {
    this.pageStatus = `Showing ${this.transactions[0].index} to ${
      this.transactions[this.transactions.length - 1].index
    } of ${this.transactionService.allTransactions.length}`;
  }

  filter(query: string) {
    console.log(query);
    this.transactionService.filter(query);
    this.transactions = this.transactionService.getNext();
    this.pageStatus = `Showing ${this.transactionService.allTransactions.length} of ${this.transactionService.allTransactions.length}`;
  }

  download() {
    this.isLoading = true;
    const options = {
      title: 'rpay-transactions',
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.transactionService.allTransactions);
    this.isLoading = false;
  }
}
