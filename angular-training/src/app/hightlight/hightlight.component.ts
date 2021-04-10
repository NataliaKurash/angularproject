import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[wsb-hightlight]'
})

export class HightlightDirective implements OnInit {
    @Input() public color: string = 'yellow';
    constructor(public el: ElementRef) {

    }
    ngOnInit(): void {
        this.el.nativeElement.style.background = this.color;
        this.el.nativeElement.style.fontWeight = 'bold';
    }
}