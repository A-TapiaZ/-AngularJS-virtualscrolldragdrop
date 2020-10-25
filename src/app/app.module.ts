import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualscrollComponent } from './components/virtualscroll/virtualscroll.component';
import { DragComponent } from './components/drag/drag.component'
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import {ScrollingModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    VirtualscrollComponent,
    NavbarComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
