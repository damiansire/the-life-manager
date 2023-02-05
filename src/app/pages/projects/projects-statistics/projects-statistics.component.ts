import { Component, Input, OnInit } from '@angular/core';
import { GeneralProjectStatistics, ProjectStatus } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-projects-statistics',
  templateUrl: './projects-statistics.component.html',
  styleUrls: ['./projects-statistics.component.scss']
})
export class ProjectsStatisticsComponent implements OnInit {
  ProjectStatus = ProjectStatus;
  @Input() projectStatistics: GeneralProjectStatistics;

  constructor() { }

  ngOnInit(): void {
  }

}
