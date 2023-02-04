import { Component, Input, OnInit } from '@angular/core';
import { ProjectStatus } from 'src/app/interfaces/project.interface';

const chipColor: { [key: string]: string; } = {}
chipColor[ProjectStatus.backlog] = "bg-yellow-200 text-yellow-600"
chipColor[ProjectStatus.inProgress] = "bg-blue-200 text-blue-600"
chipColor[ProjectStatus.finalized] = "bg-green-200 text-green-600"
chipColor[ProjectStatus.discontinued] = "bg-red-200 text-red-600"

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {

  @Input() text: string;

  get backgroundColorClass() {
    return chipColor[this.text] || "bg-purple-200 text-purple-600"
  }
  constructor() { }


}
