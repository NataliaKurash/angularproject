import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HightlightDirective } from './hightlight/hightlight.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from './users/users.service';
import {HttpClientModule} from '@angular/common/http'
import { TitlePipe } from './title/title.pipe';
import { PageNotFoundComponent } from './PageNotFoundComponent/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    HightlightDirective,
    TitlePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
