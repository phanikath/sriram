import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import "ag-grid-enterprise";

@Component({
  selector: 'app-scrollinfinity',
  templateUrl: './scrollinfinity.component.html',
  styleUrls: ['./scrollinfinity.component.scss']
})
export class ScrollinfinityComponent  {
//   array = [];
//   sum = 100;
//   throttle = 300;
//   scrollDistance = 1;
//   scrollUpDistance = 2;
//   direction = '';
//   modalOpen = false;

//   // nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

//   constructor() {
//     this.appendItems(0, this.sum);
//   }
  
//   addItems(startIndex, endIndex, _method) {
//     for (let i = 0; i < this.sum; ++i) {
//       this.array[_method]([i, ' ', this.generateWord()].join(''));
//     }
//   }
  
//   appendItems(startIndex, endIndex) {
//     this.addItems(startIndex, endIndex, 'push');
//   }
  
//   prependItems(startIndex, endIndex) {
//     this.addItems(startIndex, endIndex, 'unshift');
//   }

//   onScrollDown (ev) {
//     console.log('scrolled down!!', ev);

//     // add another 20 items
//     const start = this.sum;
//     this.sum += 20;
//     this.appendItems(start, this.sum);
    
//     this.direction = 'down'
//   }
  
//   onUp(ev) {
//     console.log('scrolled up!', ev);
//     const start = this.sum;
//     this.sum += 20;
//     this.prependItems(start, this.sum);
  
//     this.direction = 'up';
//   }
//   generateWord() {
//    // return chance.word();
//   }

//   toggleModal() {
//     this.modalOpen = !this.modalOpen;
//   }
// }
private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private rowModelType;
  private paginationPageSize;
  private cacheOverflowSize;
  private maxConcurrentDatasourceRequests;
  private infiniteInitialRowCount;
  private maxBlocksInCache;
  private getRowNodeId;
  private components;
  private rowData: [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "ID",
        width: 50,
        valueGetter: "node.id",
        cellRenderer: "loadingCellRenderer",
        sortable: false,
        suppressMenu: true
      },
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        suppressMenu: true
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: ["equals", "lessThan", "greaterThan"],
          newRowsAction: "keep",
          suppressAndOrCondition: true
        }
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        filter: "agSetColumnFilter",
        filterParams: {
          values: countries(),
          newRowsAction: "keep"
        }
      },
      {
        headerName: "Year",
        field: "year",
        width: 90,
        filter: "agSetColumnFilter",
        filterParams: {
          values: ["2000", "2004", "2008", "2012"],
          newRowsAction: "keep"
        }
      },
      {
        headerName: "Date",
        field: "date",
        width: 110
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110,
        suppressMenu: true
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100,
        suppressMenu: true
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100,
        suppressMenu: true
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100,
        suppressMenu: true
      },
      {
        headerName: "Total",
        field: "total",
        width: 100,
        suppressMenu: true
      }
    ];
    this.defaultColDef = {
      sortable: true,
      resizable: true
    };
    this.rowSelection = "multiple";
    this.rowModelType = "infinite";
    this.paginationPageSize = 100;
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 1;
    this.maxBlocksInCache = 2;
    this.getRowNodeId = function(item) {
      return item.id;
    };
    this.components = {
      loadingCellRenderer: function(params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/images/loading.gif">';
        }
      }
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

  //   this.http.get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
  //     .subscribe(data => {
  //       data.forEach(function(data, index) {
  //         data.id = "R" + (index + 1);
  //       });
  //       var dataSource = {
  //         rowCount: null,
  //         getRows: function(params) {
  //           console.log("asking for " + params.startRow + " to " + params.endRow);
  //           setTimeout(function() {
  //             var dataAfterSortingAndFiltering = sortAndFilter(data, params.sortModel, params.filterModel);
  //             var rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
  //             var lastRow = -1;
  //             if (dataAfterSortingAndFiltering.length <= params.endRow) {
  //               lastRow = dataAfterSortingAndFiltering.length;
  //             }
  //             params.successCallback(rowsThisPage, lastRow);
  //           }, 3000);
  //         }
  //       };
  //       params.api.setDatasource(dataSource);
  //     });
  }
}

function countries() {
  return [
    "United States",
    "Russia",
    "Australia",
    "Canada",
    "Norway",
    "China",
    "Zimbabwe",
    "Netherlands",
    "South Korea",
    "Croatia",
    "France",
    "Japan",
    "Hungary",
    "Germany",
    "Poland",
    "South Africa",
    "Sweden",
    "Ukraine",
    "Italy",
    "Czech Republic",
    "Austria",
    "Finland",
    "Romania",
    "Great Britain",
    "Jamaica",
    "Singapore",
    "Belarus",
    "Chile",
    "Spain",
    "Tunisia",
    "Brazil",
    "Slovakia",
    "Costa Rica",
    "Bulgaria",
    "Switzerland",
    "New Zealand",
    "Estonia",
    "Kenya",
    "Ethiopia",
    "Trinidad and Tobago",
    "Turkey",
    "Morocco",
    "Bahamas",
    "Slovenia",
    "Armenia",
    "Azerbaijan",
    "India",
    "Puerto Rico",
    "Egypt",
    "Kazakhstan",
    "Iran",
    "Georgia",
    "Lithuania",
    "Cuba",
    "Colombia",
    "Mongolia",
    "Uzbekistan",
    "North Korea",
    "Tajikistan",
    "Kyrgyzstan",
    "Greece",
    "Macedonia",
    "Moldova",
    "Chinese Taipei",
    "Indonesia",
    "Thailand",
    "Vietnam",
    "Latvia",
    "Venezuela",
    "Mexico",
    "Nigeria",
    "Qatar",
    "Serbia",
    "Serbia and Montenegro",
    "Hong Kong",
    "Denmark",
    "Portugal",
    "Argentina",
    "Afghanistan",
    "Gabon",
    "Dominican Republic",
    "Belgium",
    "Kuwait",
    "United Arab Emirates",
    "Cyprus",
    "Israel",
    "Algeria",
    "Montenegro",
    "Iceland",
    "Paraguay",
    "Cameroon",
    "Saudi Arabia",
    "Ireland",
    "Malaysia",
    "Uruguay",
    "Togo",
    "Mauritius",
    "Syria",
    "Botswana",
    "Guatemala",
    "Bahrain",
    "Grenada",
    "Uganda",
    "Sudan",
    "Ecuador",
    "Panama",
    "Eritrea",
    "Sri Lanka",
    "Mozambique",
    "Barbados"
  ];
}
function sortAndFilter(allOfTheData, sortModel, filterModel) {
  return sortData(sortModel, filterData(filterModel, allOfTheData));
}
function sortData(sortModel, data) {
  var sortPresent = sortModel && sortModel.length > 0;
  if (!sortPresent) {
    return data;
  }
  var resultOfSort = data.slice();
  resultOfSort.sort(function(a, b) {
    for (var k = 0; k < sortModel.length; k++) {
      var sortColModel = sortModel[k];
      var valueA = a[sortColModel.colId];
      var valueB = b[sortColModel.colId];
      if (valueA == valueB) {
        continue;
      }
      var sortDirection = sortColModel.sort === "asc" ? 1 : -1;
      if (valueA > valueB) {
        return sortDirection;
      } else {
        return sortDirection * -1;
      }
    }
    return 0;
  });
  return resultOfSort;
}
function filterData(filterModel, data) {
  var filterPresent = filterModel && Object.keys(filterModel).length > 0;
  if (!filterPresent) {
    return data;
  }
  var resultOfFilter = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (filterModel.age) {
      var age = item.age;
      var allowedAge = parseInt(filterModel.age.filter);
      if (filterModel.age.type == "equals") {
        if (age !== allowedAge) {
          continue;
        }
      } else if (filterModel.age.type == "lessThan") {
        if (age >= allowedAge) {
          continue;
        }
      } else {
        if (age <= allowedAge) {
          continue;
        }
      }
    }
    if (filterModel.year) {
      if (filterModel.year.values.indexOf(item.year.toString()) < 0) {
        continue;
      }
    }
    if (filterModel.country) {
      if (filterModel.country.values.indexOf(item.country) < 0) {
        continue;
      }
    }
    resultOfFilter.push(item);
  }
  return resultOfFilter;
}
