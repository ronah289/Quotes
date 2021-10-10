import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlighter]'
})
export class QuoteHighlighterDirective {

  constructor(private elem: ElementRef) {
  }
  @HostListener("click") onClicks() {
    this.textDeco("red")
  }

  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("yellow")
  }
  private textDeco(action: string) {
    this.elem.nativeElement.style.color = action;
  }


}
