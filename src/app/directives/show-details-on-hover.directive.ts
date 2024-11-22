import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowDetailsOnHover]',
  standalone: true
})
export class ShowDetailsOnHoverDirective {

  // The text to be displayed when the user hovers over the element
  @Input() detailsOnHover: string = '';

  private htmlTag: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') OnMouseEnter() {
    this.showDetails();
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.hideDetails();
  }

  private showDetails() {
    if (this.detailsOnHover) {
      this.htmlTag = this.renderer.createElement('p');
      const detailsText = this.renderer.createText(this.detailsOnHover);
      this.renderer.appendChild(this.htmlTag, detailsText);

      // Apply the styles to make text bold, red, and with font size 18px
      this.renderer.setStyle(this.htmlTag, 'font-weight', 'bold');
      this.renderer.setStyle(this.htmlTag, 'color', 'red');
      this.renderer.setStyle(this.htmlTag, 'font-size', '18px');

      this.renderer.appendChild(this.el.nativeElement, this.htmlTag);
    }
  }

  private hideDetails() {
    if (this.htmlTag) {
      this.renderer.removeChild(this.el.nativeElement, this.htmlTag);
      this.htmlTag = null;
    }
  }
}
