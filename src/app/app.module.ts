import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { PatientListComponent } from './patient-list/patient-list.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalModule } from "./_modal";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, PatientListComponent, LoginComponent,],
  entryComponents: [PatientListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    NgbModule,
    ModalModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTabsModule,
    
   
    
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
