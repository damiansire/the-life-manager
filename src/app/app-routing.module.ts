import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  {
    path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
  },
  { path: "dashboard", loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: "doubt-tracker", loadChildren: () => import('./pages/doubt-tracker/doubt-tracker.module').then(m => m.DoubtTrackerModule) },
  { path: "finance-tracker", loadChildren: () => import('./pages/finance-tracker/finance-tracker.module').then(m => m.FinanceTrackerModule) },
  { path: "goal-tracker", loadChildren: () => import('./pages/goal-tracker/goal-tracker.module').then(m => m.GoalTrackerModule) },
  { path: "job-search", loadChildren: () => import('./pages/job-search/job-search.module').then(m => m.JobSearchModule) },
  { path: "projects", loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
  { path: "technology-event-tracking", loadChildren: () => import('./pages/technology-event-tracking/technology-event-tracking.module').then(m => m.TechnologyEventTrackingModule) },
  { path: "trip-planner", loadChildren: () => import('./pages/trip-planner/trip-planner.module').then(m => m.TripPlannerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

