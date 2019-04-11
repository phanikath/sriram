import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checboxtable',
  templateUrl: './checboxtable.component.html',
  styleUrls: ['./checboxtable.component.scss']
})
export class ChecboxtableComponent {

  displayedColumns = ['checked', 'position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }
}

export interface Element {
  checked: boolean;
  name: string;
  position: number;
  weight: number;
  symbol: string;
  highlighted?: boolean;
  hovered?: boolean;
}

const ELEMENT_DATA: Element[] = [
  { checked: false, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { checked: false, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { checked: false, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { checked: false, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { checked: false, position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { checked: false, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */