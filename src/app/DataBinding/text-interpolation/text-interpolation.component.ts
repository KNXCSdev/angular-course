import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
})
export class TextInterpolationComponent {
  @Input() currentCustomer: string;
  @Input() itemImageUrl: string;
}
