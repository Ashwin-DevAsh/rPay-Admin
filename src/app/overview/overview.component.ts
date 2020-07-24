import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { OverviewService } from '../services/OverviewService';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(public overviewService: OverviewService) {}

  ngOnInit(): void {
    console.log('Mounted');
    this.createGraph();
  }

  chart: Chart;

  createGraph() {
    this.updateMainGraph();
    this.updatePaymentGraph();
    this.updateCashChart();
    this.updateTransactionChart();
    this.updateWithdrawChart();
    this.updateMainGraph();
  }

  updatePaymentGraph = () => {
    var payemtsChart = document.getElementById('myChartPayments');
    this.createMiniChart(payemtsChart, this.overviewService.paymentList, 0);
  };

  updateCashChart = () => {
    var cashInChart = document.getElementById('myChartCashIn');
    this.createMiniChart(cashInChart, this.overviewService.cashInList, 1);
  };

  updateTransactionChart = () => {
    var transactionsChart = document.getElementById('myChartTransactions');
    this.createMiniChart(
      transactionsChart,
      this.overviewService.transactions,
      2
    );
  };

  updateWithdrawChart = () => {
    var withdrawChart = document.getElementById('myChartWithdraw');
    this.createMiniChart(withdrawChart, this.overviewService.withdrawList, 3);
  };

  updateMainGraph = () => {
    var mainChart = document.getElementById('mainGraph');
    this.createMainChart(mainChart);
  };

  selectTimeLine(timeLine: String) {
    console.log(timeLine);
    this.overviewService.graphTimeLines.splice(
      this.overviewService.graphTimeLines.indexOf(timeLine),
      1
    );
    this.overviewService.graphTimeLines.push(
      this.overviewService.graphTimeLine
    );
    this.overviewService.graphTimeLine = timeLine;
  }

  updateChartFunctions: Array<Function> = [
    this.updatePaymentGraph,
    this.updateCashChart,
    this.updateTransactionChart,
    this.updateWithdrawChart,
  ];

  selectGraphMode(modeIndex: number) {
    console.log(this.overviewService.graphMode);

    var temp = this.overviewService.graphMode;
    this.overviewService.graphMode = modeIndex;
    this.updateChartFunctions[modeIndex]();
    this.updateChartFunctions[temp]();
    this.updateMainGraph();
  }

  selectIntervalMode(modeIndex: number) {
    this.overviewService.intervalMode = modeIndex;
  }

  createMainChart(
    ctx: any,
    data: Array<Number> = this.overviewService.mainList[
      this.overviewService.graphMode
    ]
  ) {
    var gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 450);

    gradient.addColorStop(0, 'rgba(7, 121, 228, 0.4)');
    gradient.addColorStop(0.5, 'rgba(7, 121, 228, 0.02)');
    gradient.addColorStop(1, 'rgba(7, 121, 228, 0)');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data,
        datasets: [
          {
            label: '# of Votes',
            data: data,
            // fill: false,
            backgroundColor: gradient,
            borderColor: '#0779e4',
            borderWidth: 1,
          },
        ],
      },
      options: {
        tooltips: {
          enabled: true,
        },
        responsive: true,
        elements: {
          line: {
            tension: 0,
          },
          point: {
            radius: 0,
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: 'rgba(0,0,0,0.5)',
              },
              gridLines: {
                color: 'rgba(0,0,0,0.05)',
                zeroLineColor: 'rgba(0,0,0,0.05)',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: 'rgba(0,0,0,0.5)',
              },
              gridLines: {
                color: 'rgba(0,0,0,0.05)',
                zeroLineColor: 'rgba(0,0,0,0.05)',
              },
            },
          ],
        },
      },
    });
  }

  createMiniChart(ctx: any, data: Array<Number>, modeIndex: Number) {
    var gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 450);

    if (modeIndex == this.overviewService.graphMode) {
      gradient.addColorStop(0, 'rgba(7, 121, 228, 0.05)');
      gradient.addColorStop(0.1, 'rgba(7, 121, 228, 0)');
      gradient.addColorStop(0.2, 'rgba(7, 121, 228, 0)');
      gradient.addColorStop(0.3, 'rgba(7, 121, 228, 0)');
      gradient.addColorStop(0.4, 'rgba(7, 121, 228, 0)');
      gradient.addColorStop(0.5, 'rgba(7, 121, 228, 0)');
      gradient.addColorStop(0.6, 'rgba(7, 121, 228, 0)');
      gradient.addColorStop(0.7, 'rgba(7, 121, 228, 0)');
      gradient.addColorStop(0.8, 'rgba(7, 121, 228, 0)');
      gradient.addColorStop(0.9, 'rgba(7, 121, 228, 0)');
      gradient.addColorStop(1, 'rgba(7, 121, 228, 0)');
    } else {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
      gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.9, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data,
        datasets: [
          {
            label: '# of Votes',
            data: data,
            fill: true,
            backgroundColor: gradient,
            borderColor:
              modeIndex == this.overviewService.graphMode ? '#0779e4' : 'grey',
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: {
          duration: 0,
        },
        responsive: true,
        tooltips: {
          callbacks: {
            title: function (tooltipItem, data) {
              return 1;
            },
            label: function (tooltipItem, data) {
              return 1;
            },
          },
        },
        elements: {
          line: {
            tension: 0,
          },
          point: {
            radius: 0,
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false, //this will remove only the label
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false, //this will remove only the label
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
  }
}
