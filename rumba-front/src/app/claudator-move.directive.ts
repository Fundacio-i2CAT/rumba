import { Directive, ElementRef, ViewChild, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: '[appClaudatorMove]'
})
export class ClaudatorMoveDirective implements OnInit {

  @ViewChild('right') right: ElementRef;

  constructor() {}

  ngOnInit() {

  }

  @HostListener('touchstart', ['$event'])
  onTouchstart (event: MouseEvent) {

  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
      this.right.nativeElement.style.left = event.pageX;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

  }



}
