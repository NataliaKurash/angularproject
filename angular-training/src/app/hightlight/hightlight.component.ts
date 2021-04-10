import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[wsb-hightlight]'
})

export class HightlightDirective{
constructor(public el:ElementRef){
    this.el.nativeElement.style.background = 'yellow';
    this.el.nativeElement.style.fontWeight = 'bold';
}
}