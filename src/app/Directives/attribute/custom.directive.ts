import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  //YOU CAN BASICALLY EXPORT THIS AND USE THIS IN A BUTTON SO WHEN YOU CLICK IT WILL CALL A DESITRED FUNCION IN A CLASS
  exportAs: 'appHighlight',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  // USEFULL
}
