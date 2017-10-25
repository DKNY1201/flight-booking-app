import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[appHoverColor]'
})
export class HoverDirective {
  @Input() appHoverColor;
  @Input() defaultColor;
  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onMouseover() {
    this.el.nativeElement.style.color = this.appHoverColor;
  }

  @HostListener('mouseleave') onMouseleave() {
    this.el.nativeElement.style.color = this.defaultColor;
  }
}
