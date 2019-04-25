import { Component, OnInit, SimpleChanges, OnChanges, Input, ContentChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../products/state/product.reducer';


@Component({
  selector: 'app-onecomponent',
  templateUrl: './onecomponent.component.html',
  styleUrls: ['./onecomponent.component.scss']
})
export class OnecomponentComponent implements OnInit  {
  @Input() message: string;
  @ContentChild(OnecomponentComponent) contentChild: OnecomponentComponent;
 ngcontnet = 'karghieykya';
  user;
  edituser;
  name = 'sriram';
  private hero;
  displayCode2: boolean;
  textbox1: string;

  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit() {
    this.store.pipe(select('products')).subscribe(
      products => {
        if (products) {
          this.displayCode2 = products.showProductCode2;
          this.textbox1 = products.showTextCode;
        }
      });
  }

  checkChanged(value: boolean): void {
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE2',
      payload: value
    });
  }

  onChange(event: any) {
    console.log(event.target.value);
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_TEXTCODE',
      payload: event.target.value
    });
  }


//   ngOnChanges(changes: SimpleChanges) {
//     for (let propName in changes) {
//       let change = changes[propName];

//       let curVal  = JSON.stringify(change.currentValue);
//       console.log(curVal);
//     }
//    }

//   ngOnInit() {
//     this.userser.cast.subscribe(user => this.user = user)
//   }

// // tslint:disable-next-line: use-life-cycle-interface
//   ngAfterContentChecked(): void {

//     this.hero = this.contentChild.ngcontnet;
//     console.log('ngAfterContentChecked'+ ' ' + this.hero);

// }
// ngAfterContentInit(): void {
//   console.log("ngAfterContentInit");
// }

  // edit() {
  //   this.userser.editUser(this.edituser);

  // }
}
