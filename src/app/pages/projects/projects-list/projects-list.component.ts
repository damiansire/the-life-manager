import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  @Input() projects: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}

/*
export interface Project {
  name: string,
  projectStatus: ProjectStatus
}

export interface GeneralProjectStatistics {
  backlog: number,
  inProgress: number,
  completed: number,
  total: number,
}

export interface GetProjectsReponse extends GeneralProjectStatistics {
  projects: Project[]
}


*/