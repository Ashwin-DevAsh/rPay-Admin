import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
  constructor() {}

  graphTimeLine: String = 'Past 7 Days';
  graphTimeLines: Array<String> = [
    'Past 30 Days',
    'Past 90 Days',
    'Past 1 Year',
    'All Time',
  ];

  graphMode = 0;
  intervalMode = 0;

  paymentList = [40, 9, 0, 0, 10, 3, 20, 40, 9, 0];
  cashInList = [0, 0, 0, 100, 20, 9, 0];
  transactions = [40, 50, 0, 50, 50, 0];
  withdrawList = [0, 0, 0, 0, 0, 0, 50, 50, 50, 5];

  mainList = [
    this.paymentList,
    this.cashInList,
    this.transactions,
    this.withdrawList,
  ];
}
