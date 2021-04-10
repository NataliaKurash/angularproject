import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[wsb-hightlight]'
})

export class HightlightDirective implements OnInit {
    @Input('wsb-hightlight') public color: string = 'yellow';
    constructor(public el: ElementRef) {

    }
    ngOnInit(): void {
        this.el.nativeElement.style.background = this.color || 'yellow';
        this.el.nativeElement.style.fontWeight = 'bold';
    }
}