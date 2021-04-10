import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'wsb-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent {
    @Input() public count:number = 0;
    @Output() public countChange: EventEmitter<number> =  new EventEmitter();

public add() {
 this.count +=1;
 this.countChange.emit(this.count);
}
}