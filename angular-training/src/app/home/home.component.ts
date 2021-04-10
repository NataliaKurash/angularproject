import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'wsb-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
public ngOnInit():void{
console.log('HomeCOmponent jest gotowy');
}
}