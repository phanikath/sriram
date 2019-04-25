import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from './state/product.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayCode: boolean;
  displayCode1: boolean;

  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit() {
    this.store.pipe(select('products')).subscribe(
      products => {
        if (products) {
          this.displayCode = products.showProductCode;
          this.displayCode1 = products.showProductCode1;
        }
      });
  }

  checkChanged(value: boolean): void {
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE',
      payload: value
    });
  }



  checkChanged1(value: boolean): void {
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE1',
      payload: value
    });
  }
}
