import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchButtonsComponent } from './switch-buttons.component';



@NgModule({
  declarations: [
    SwitchButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SwitchButtonsComponent]
})
export class SwitchButtonsModule { }
