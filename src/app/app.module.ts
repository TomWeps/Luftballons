import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BallonComponent } from './ballon/ballon.component';
import { DdListComponent } from './dd-list/dd-list.component';
import { UlListComponent } from './ul-list/ul-list.component';



@NgModule({
   declarations: [
      AppComponent,
      BallonComponent,
      BallonComponent,
      DdListComponent,
      UlListComponent,
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
