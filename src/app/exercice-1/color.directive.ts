import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.el.nativeElement.style.color = 'black';
  }

  @HostListener('window:keydown', ['$event']) private windowClickEnter(
    event: KeyboardEvent
  ): void {
    if (event.key === 'ArrowUp') {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.fontWeight = 'bold';
    }
    if (event.key === 'ArrowDown') {
      this.el.nativeElement.style.color = 'blue';
      this.el.nativeElement.style.fontWeight = 'bold';
    }
    if (event.key === 'ArrowLeft') {
      this.el.nativeElement.style.color = 'purple';
      this.el.nativeElement.style.fontWeight = 'bold';
    }
    if (event.key === 'ArrowRight') {
      this.el.nativeElement.style.color = 'green';
      this.el.nativeElement.style.fontWeight = 'bold';
    }
    if (event.key === 'Enter') {
      this.el.nativeElement.style.color = 'black';
      this.el.nativeElement.style.fontWeight = '400';
    }
  }
}
