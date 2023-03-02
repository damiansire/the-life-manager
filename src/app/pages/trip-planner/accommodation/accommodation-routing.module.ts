import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationPageComponent } from './accommodation-page.component';

const routes: Routes = [
  {
    path: 'accomodation',
    component: AccommodationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccommodationRoutingModule { }

