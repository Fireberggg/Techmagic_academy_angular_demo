import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') mouseEnter() {
    this.el.nativeElement.classList.add('task-highlight');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.classList.remove('task-highlight');
  } 

}
