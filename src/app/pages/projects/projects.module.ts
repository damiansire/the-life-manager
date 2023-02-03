import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsStatisticsComponent } from './projects-statistics/projects-statistics.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectCardComponent } from './projects-list/project-card/project-card.component';
import { ProjectsPageComponent } from './projects-page.component';
import { StatisticCardComponent } from './projects-statistics/statistics-card/statistic-card.component';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectsStatisticsComponent,
    ProjectsListComponent,
    ProjectCardComponent,
    StatisticCardComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule { }
