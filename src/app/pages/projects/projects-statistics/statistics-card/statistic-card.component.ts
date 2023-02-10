import { Component, Input, OnInit } from '@angular/core';
import { ProjectStatus } from 'src/app/interfaces/project.interface';
import { getProjectColorStatus } from 'src/app/shared/libs/color.helper';


@Component({
  selector: 'app-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.scss']
})
export class StatisticCardComponent {
  @Input() number: number;
  @Input() total: number;
  @Input() projectStatus: ProjectStatus;
  @Input() text: string;

  get progressBarLong() {
    const percent = Math.trunc(this.number / this.total * 100);
    const precentValue = `${percent}%`
    return { width: precentValue }
  }

  constructor() { }

  progressBarColor() {
    const colorStatus = getProjectColorStatus(this.projectStatus) || 'purple';
    const colorClass = `bg-${colorStatus}-500`
    return colorClass;
  }


}



