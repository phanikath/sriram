import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-mattables',
  templateUrl: './mattables.component.html',
  styleUrls: ['./mattables.component.scss']
})
export class MattablesComponent implements OnInit {
  constructor(private store: Store<any>) { }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: any; // = new MatTableDataSource<Element>(ELEMENT_DATA);
  // dataSourceMain = new MatTableDataSource<Element>(ELEMENT_DATA);
  // groupOwner;
  // tempGroup;
  // userNameArray: Array<any> = [];
  // tempgroup1 = new MatTableDataSource<Element>();
  // tempgroup2;
  // groupNameText = '';
  ngOnInit() {
    this.store.dispatch({
      type: 'MAT_TABLES',
      payload: ELEMENT_DATA
    });

    this.store.pipe(select('Mattables')).subscribe(
      ShowMatTable => this.dataSource = ShowMatTable.ShowMatTable
    );
    //  this.mattable.getProducts().subscribe(
    //   selectedProduct => this.dataSource = selectedProduct
    // );

    //   this.dataSource = this.mattable.getProducts();
    //  this.ddbService.groupDataSource = result.ddbQueriesGroup;
    // this.dataSource = new MatTableDataSource(this.dataSource);
    // this.groupOwner = this.dataSource.data.map(item => item.name)
    //   .filter((value, index, self) => self.indexOf(value) === index);
  }


  onChange(owner: string, isChecked: boolean) {
    // if (isChecked) {
    //   this.userNameArray.push(owner);
    // } else {
    //   const index = this.userNameArray.indexOf(owner);
    //   this.userNameArray.splice(index, 1);
    // }
  }
}

//   search() {
//     this.dataSource = this.dataSourceMain;
//     if (this.userNameArray.length > 0) {
//       for (let index = 0; index < this.userNameArray.length; index++) {
//         this.tempGroup = this.dataSource.data.filter(e => e.name === this.userNameArray[index]);
//         for (let i = 0; i < this.tempGroup.length; i++) {
//           this.tempgroup1.data.push(this.tempGroup[i]);
//         }
//       }
//     }
//     if (this.groupNameText !== '') {
//       this.tempGroup = this.dataSource.data.filter(e => e.symbol === this.groupNameText);
//       for (let i = 0; i < this.tempGroup.length; i++) {
//         this.tempgroup1.data.push(this.tempGroup[i]);
//       }
//     }
//     if (this.tempgroup1.data.length > 0) {
//       this.dataSource = this.tempgroup1;
//       this.tempgroup1 = new MatTableDataSource<Element>();
//     }
//   }
// }

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'phani', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'phani', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'phani', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'prasad', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'prasad', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'prasad', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'sai', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'sai', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'sai', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'phani' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'phani' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'prasad' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'prasad' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 22, name: 'Hyd', weight: 1.0079, symbol: 'H' },
];
