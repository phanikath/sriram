import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OnecomponentComponent } from './onecomponent/onecomponent.component';
import { TwocomponentComponent } from './twocomponent/twocomponent.component';
import { ScrollinfinityComponent } from './scrollinfinity/scrollinfinity.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatCheckboxModule, MatButtonModule, MatSortModule, MatIconModule } from '@angular/material' 
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AgGridModule } from 'ag-grid-angular';
import { ChecboxtableComponent } from './checboxtable/checboxtable.component';
import { DoNotShowSecondaryOnRefreshGuard } from './DoNotShowSecondaryOnRefreshGuard';
import { ProductsModule } from './products/products.module';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MattablesComponent } from './mattables/mattables.component';

// import {AgGridModule} from 'ag-grid-community';
const routes: Routes = [
  { path: '', redirectTo: '/one', pathMatch: 'full' },
  { path: 'one', component: OnecomponentComponent  },
  { path: 'mats', component: MattablesComponent  },
  { path: 'two', component: TwocomponentComponent,
  canActivate: [ DoNotShowSecondaryOnRefreshGuard ] },
  // { path: 'prod', component: ProductComponent , data: { state: 'prod' } },
];
// import 'ag-grid-enterprise';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OnecomponentComponent,
    TwocomponentComponent,
    ScrollinfinityComponent,
    ChecboxtableComponent,
    MattablesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    InfiniteScrollModule,
    ProductsModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSortModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    AgGridModule.withComponents([])
  ],
  providers: [  DoNotShowSecondaryOnRefreshGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
