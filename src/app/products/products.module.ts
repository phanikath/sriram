import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/product.reducer';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducer),
    RouterModule.forRoot([
      { path: '\products', component: ProductsComponent }
    ])
  ]
})
export class ProductsModule { }
