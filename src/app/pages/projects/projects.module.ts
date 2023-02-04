import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsStatisticsComponent } from './projects-statistics/projects-statistics.component';
import { ProjectsCardListComponent } from './projects-card-list/projects-card-list.component';
import { ProjectCardComponent } from './projects-card-list/project-card/project-card.component';
import { ProjectsPageComponent } from './projects-page.component';
import { StatisticCardComponent } from './projects-statistics/statistics-card/statistic-card.component';
import { ProjectsTableListComponent } from './projects-table-list/projects-table-list.component';
import { IconModule } from 'src/app/shared/icon/icon.module';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectsStatisticsComponent,
    ProjectCardComponent,
    StatisticCardComponent,
    ProjectsCardListComponent,
    ProjectsTableListComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, IconModule],
})
export class ProjectsModule { }
