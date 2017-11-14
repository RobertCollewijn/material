import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatButtonModule, MatSlideToggleModule} from '@angular/material';
import 'hammerjs';

import {AppComponent} from './app.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideToggleComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
