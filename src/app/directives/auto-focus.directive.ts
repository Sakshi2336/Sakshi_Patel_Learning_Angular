import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    //Focus the element after the view initializes, Same as we did in WEB230
    this.el.nativeElement.focus();
  }

}
