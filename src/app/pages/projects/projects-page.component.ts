import { Component, OnInit } from '@angular/core';
import { GeneralProjectStatistics, Project } from 'src/app/interfaces/project.interface';
import { ProjectsService } from 'src/app/services/projects.service';
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {

  projectStatistics: GeneralProjectStatistics;
  projects: Project[];
  selectedButton = "list"

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data => {
      this.projectStatistics = data
      this.projects = data.projects
    }))
  }

  changedButton(buttonSelected: string) {
    this.selectedButton = buttonSelected;
  }
}


