import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class IconComponent {

  @Input() iconName: string;
  @Input() height: string = '24';
  @Input() width: string = '24';

  constructor() { }

}
