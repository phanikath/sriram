import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-checboxtable',
  templateUrl: './checboxtable.component.html',
  styleUrls: ['./checboxtable.component.scss']
})
export class ChecboxtableComponent {
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol', 'edit'];
  data = Object.assign(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  dataSource1 = new MatTableDataSource<Element>();
  dataSource2 = new MatTableDataSource<Element>();
  selection = new SelectionModel<Element>(true, []);
  selection1 = new SelectionModel<Element>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    console.log(this.data);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  isAllSelected1() {
    const numSelected = this.selection1.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  removeSelectedRows() {

    this.selection.selected.forEach(item => {
      const das = this.data.filter(d => d === item);
      this.dataSource1.data.push((das[0]));

      this.dataSource1 = new MatTableDataSource<Element>(this.dataSource1.data);
      let index: number = this.data.findIndex(d => d === item);
      console.log(this.data.findIndex(d => d === item));
      this.data.splice(index, 1)
      this.dataSource = new MatTableDataSource<Element>(this.data);

    });
    this.selection = new SelectionModel<Element>(true, []);
  }

  addSelectedRows() {

    this.selection1.selected.forEach(item => {
      const das = this.dataSource1.data.filter(d => d === item);
      this.dataSource.data.push((das[0]));
      this.dataSource = new MatTableDataSource<Element>(this.dataSource.data.sort());
      this.sort.active = 'position';
      this.sort.direction = 'asc';
      this.dataSource.sort = this.sort;

      let index: number = this.dataSource1.data.findIndex(d => d === item);
      this.dataSource1.data.splice(index, 1)
      this.dataSource1 = new MatTableDataSource<Element>(this.dataSource1.data);

    });
    this.selection1 = new SelectionModel<Element>(true, []);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  masterToggle1() {
    this.isAllSelected() ?
      this.selection1.clear() :
      this.dataSource1.data.forEach(row => this.selection1.select(row));
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */