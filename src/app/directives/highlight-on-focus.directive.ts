import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective{

  @Input() appHighlightOnFocus = '';
  //elementRef allows us to access the native DOM element associated with the directive
  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus(){
    this.border(this.appHighlightOnFocus || 'lightblue');
  }

  @HostListener('blur') offFocus(){
    this.border('');
  }

  private border(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
