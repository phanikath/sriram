import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OnecomponentComponent } from './onecomponent/onecomponent.component';
import { TwocomponentComponent } from './twocomponent/twocomponent.component';
import { ScrollinfinityComponent } from './scrollinfinity/scrollinfinity.component';

import { MatTableModule, MatCheckboxModule } from '@angular/material' 
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from "@angular/common/http";
import { ChecboxtableComponent } from './checboxtable/checboxtable.component';

// import {AgGridModule} from 'ag-grid-community';

// import 'ag-grid-enterprise';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OnecomponentComponent,
    TwocomponentComponent,
    ScrollinfinityComponent,
    ChecboxtableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    
    MatTableModule,
    MatCheckboxModule,
    AgGridModule.withComponents([])
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
