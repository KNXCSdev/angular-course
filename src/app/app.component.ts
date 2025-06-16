import { Component } from '@angular/core';
export class Item {
  name = '';
}
@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //SECTION TEXT INTERPOLATION
  currentCustomer = 'Mario';

  //SECTION EVENT BINDING
  currentItem = { name: 'teapot' };
  clickMessage = '';

  onSave(event?: MouseEvent) {
    const evtMsg = event
      ? ' Event target is ' + (event.target as HTMLElement).textContent
      : '';
    alert('Saved.' + evtMsg);
    if (event) {
      event.stopPropagation();
    }
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event
      ? ' Event target class is ' + (event.target as HTMLElement).className
      : '';
    alert('Click me.' + evtMsg);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  //SECTION PROPERTY BINDING
  isUnchanged = false;
  parentItem = 'lamp';
  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  itemImageUrl =
    'https://images.freeimages.com/fic/images/icons/2297/super_mario/256/paper_bowser.png';
}
