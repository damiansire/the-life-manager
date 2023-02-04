import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-projects-card-list',
  templateUrl: './projects-card-list.component.html',
  styleUrls: ['./projects-card-list.component.scss']
})
export class ProjectsCardListComponent implements OnInit {

  @Input() projects: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
