import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
@Component({
  selector: 'app-projects-table-list',
  templateUrl: './projects-table-list.component.html',
  styleUrls: ['./projects-table-list.component.scss']
})
export class ProjectsTableListComponent implements OnInit {

  @Input() projects: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
