import { Component } from '@angular/core';

@Component({
  selector: 'wsb-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public title = 'Angular project';

  public onCountChange(count:number){
    console.log(`ta wartośc się znienia`, count);
  }
}
