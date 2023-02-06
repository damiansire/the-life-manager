import { Component, Input, OnInit } from '@angular/core';
import { ProjectStatus } from 'src/app/interfaces/project.interface';
import { getProjectColorStatus } from '../libs/color.helper';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {

  @Input() text: ProjectStatus;

  get backgroundColorClass() {
    const colorStatus = getProjectColorStatus(this.text) || 'purple'
    return `bg-${colorStatus}-200 text-${colorStatus}-600`
  }

  constructor() { }



}
