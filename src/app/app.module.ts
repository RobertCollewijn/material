import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import 'hammerjs';

import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


import {AppComponent} from './app.component';
import {SlideToggleComponent} from './slide-toggle/slide-toggle.component';
import {ButtonComponent} from './button/button.component';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {CdkTableModule, OverlayModule} from "@angular/cdk";

@NgModule({
  exports: [
    // CDk
    //CdkTableModule,
    // OverlayModule,
    // Material

    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,

    BrowserAnimationsModule,
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    SlideToggleComponent,
    ButtonComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
