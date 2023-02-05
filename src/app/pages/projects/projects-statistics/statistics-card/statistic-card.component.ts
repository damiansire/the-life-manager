import { Component, Input, OnInit } from '@angular/core';
import { ProjectStatus } from 'src/app/interfaces/project.interface';
import { getProjectColorStatus } from 'src/app/shared/libraries/color.helper';

@Component({
  selector: 'app-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.scss']
})
export class StatisticCardComponent implements OnInit {
  @Input() number: number;
  @Input() projectStatus: ProjectStatus;
  @Input() text: string;
  @Input() total: number;

  constructor() { }

  ngOnInit(): void {
  }

  get progressBarClasses() {
    let progressBarClasses = '';
    if (this.projectStatus) {
      const colorStatus = getProjectColorStatus(this.projectStatus) || 'purple';
      const colorClass = `bg-${colorStatus}-500`
      progressBarClasses += colorClass;
    }
    if (this.total) {
      const percent = this.number / this.total;

    }
    return `colorClass`
  }



}



