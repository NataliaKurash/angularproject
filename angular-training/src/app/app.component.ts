import { Component } from '@angular/core';

@Component({
  selector: 'wsb-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public title = 'Angular project';
  public isToggled: boolean = false;
  public userName: string = 'John';
  public currentDate: Date = new Date();

  public onCountChange(count:number){
    console.log(`ta wartośc się znienia`, count);
  }
  public toggle(){
this.isToggled = !this.isToggled;
  }

  public toggleName():void{
   this.userName =  this.userName === 'John' ? 'Mary': 'John'; 
  }
}
