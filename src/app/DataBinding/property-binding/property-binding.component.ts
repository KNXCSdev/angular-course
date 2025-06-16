import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
})
export class PropertyBindingComponent {
  @Input() isUnchanged: boolean = true;
  @Input() classes: string;
  @Input() parentItem: string;
  @Input() interpolationTitle: string;
  @Input() propertyTitle: string;
  @Input() evilTitle: string;
  @Input() itemImageUrl: string;
}
