import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BallonComponent } from './ballon/ballon.component';
import { HListComponent } from './h-list/h-list.component';
import { VListComponent } from './v-list/v-list.component';

@NgModule({
   declarations: [
      AppComponent,
      BallonComponent,
      HListComponent,
      VListComponent,
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
