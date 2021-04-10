import { Component } from '@angular/core';

@Component({
  selector: 'wsb-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h1>
      Welcome to {{title}}!
    </h1>
    <div class="columns">
      <div class="column">
        <wsb-counter (countChange)="onCountChange($event)"></wsb-counter>
      </div>
      <div class="column">
      <wsb-counter [count]="10"></wsb-counter>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class AppComponent {
  public title = 'Angular project';

  public onCountChange(count:number){
    console.log(`ta wartośc się znienia`, count);
  }
}
