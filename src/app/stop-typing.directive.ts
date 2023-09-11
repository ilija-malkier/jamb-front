import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopTyping]'
})
export class StopTypingDirective {

  @Output() stopTyping = new EventEmitter<string>();
  private typingTimer: any;
  private doneTypingInterval: number = 100;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    clearTimeout(this.typingTimer);

    this.typingTimer = setTimeout(() => {
      this.stopTyping.emit(value);
    }, this.doneTypingInterval);
  }

}
