import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/app.component';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
})
export class EventBindingComponent {
  @Input() currentItem!: Item;
  @Input() clickMessage = '';

  @Output() save = new EventEmitter<MouseEvent | undefined>();
  @Output() delete = new EventEmitter<Item>();
  @Output() click = new EventEmitter<MouseEvent | undefined>();
  @Output() inputChanged = new EventEmitter<Event>();

  emitSave(event?: MouseEvent) {
    this.save.emit(event);
  }

  emitDelete(item: Item) {
    this.delete.emit(item);
  }

  emitClick(event?: MouseEvent) {
    this.click.emit(event);
  }

  emitInputChange(event: Event) {
    this.inputChanged.emit(event);
  }
}
