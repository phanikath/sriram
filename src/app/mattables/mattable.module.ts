import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MattablesComponent } from './mattables.component';

import { MatTableModule, MatCheckboxModule, MatButtonModule, MatSortModule, MatIconModule } from '@angular/material' ;
import { FormsModule } from '@angular/forms';
import { reducer } from './store/mattables.reducer';

@NgModule({
  declarations: [
    MattablesComponent
  ]
  ,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSortModule,
    StoreModule.forFeature('Mattables', reducer),
  ]
})
export class MattableModule { }
