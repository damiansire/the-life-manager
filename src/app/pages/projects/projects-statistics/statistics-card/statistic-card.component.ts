import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.scss']
})
export class StatisticCardComponent implements OnInit {
  @Input() number: number;
  @Input() text: string;
  constructor() { }

  ngOnInit(): void {
  }

}


