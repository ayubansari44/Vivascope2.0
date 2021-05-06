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
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalModule } from "./_modal";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';
// import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [AppComponent, HeaderComponent,  LoginComponent, Dialog1Component, Dialog2Component,],
  entryComponents: [Dialog1Component], 
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
    // ModalModule.forRoot(),
    
    
   
    
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
