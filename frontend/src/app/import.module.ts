// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatSnackBarModule,
    MatChipsModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSortModule,
    MatTooltipModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatProgressBarModule,
    MatExpansionModule
} from '@angular/material';
import 'hammerjs';

// other modules
import { ToastrModule } from 'ngx-toastr';

// component
@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        MatChipsModule,
        MatIconModule,
        MatAutocompleteModule,
        MatInputModule,
        MatTabsModule,
    ],
    exports: [
        BrowserModule,
        MatIconModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule,
        CdkTableModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatChipsModule,
        MatRadioModule,
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        MatTabsModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatTableModule,
        MatAutocompleteModule,
        MatSortModule,
        MatTooltipModule,
        MatMenuModule,
        MatListModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatProgressBarModule,
        MatExpansionModule,
    ],
    providers: []
})

export class ImportModule {

}

