import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch-buttons',
  templateUrl: './switch-buttons.component.html',
  styleUrls: ['./switch-buttons.component.scss']
})
export class SwitchButtonsComponent {
  @Output() selectedButton$: EventEmitter<string> = new EventEmitter();
  selectedButton: string = "table"

  constructor() { }

  setSelectedButton(button: string) {
    this.selectedButton$.emit(button)
    this.selectedButton = button;
  }

}
