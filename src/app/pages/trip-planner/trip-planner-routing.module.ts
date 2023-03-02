import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./accommodation/accommodation.module').then((m) => m.AccommodationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripPlannerRoutingModule { }
