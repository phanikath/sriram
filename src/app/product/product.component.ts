import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  getbutton() {
    console.log("getbutton");
   }
    
}