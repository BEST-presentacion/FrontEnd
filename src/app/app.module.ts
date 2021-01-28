import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input"
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ViewIndividualRecordDialogComponent } from './main/view-record/view-individual-record-dialog/view-individual-record-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddRecordComponent } from './main/add-record/add-record.component';
import { ViewRecordComponent } from './main/view-record/view-record.component';
import { GenerateReportComponent } from './main/generate-report/generate-report.component';

import { ViewRecordService } from "../app/services/view-record.service";
import { PatientService } from './services/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingPageComponent,
    AddRecordComponent,
    ViewRecordComponent,
    GenerateReportComponent,
    ViewIndividualRecordDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    HttpClientModule,
    MatSlideToggleModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ViewRecordService,PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
