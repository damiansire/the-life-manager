import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccommodationRoutingModule } from './accommodation-routing.module';
import { AccommodationPageComponent } from './accommodation-page.component';


@NgModule({
  declarations: [
    AccommodationPageComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule
  ]
})
export class AccommodationModule { }
