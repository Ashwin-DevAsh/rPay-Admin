import { Component, OnInit } from '@angular/core';
import { NodeService } from './NodeService';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss'],
})
export class NodesComponent implements OnInit {
  constructor(public nodeService: NodeService) {}

  nodes = [
    {
      id: 'rpay@9551574355',
      tokenID: '12345',
      networkID:
        'ndj2dbfioinrangeprintjdbBuild a custom, branded payment page for your business in under 10 minutes and start accepting international and domestic payments with zero integration and tech efforts',
      status: 'Online',
      data: '100%',
    },
  ];

  ngOnInit(): void {}
}
