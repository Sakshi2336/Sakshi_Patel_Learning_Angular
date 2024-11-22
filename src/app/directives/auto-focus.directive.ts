import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit{

  constructor(private el:ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
