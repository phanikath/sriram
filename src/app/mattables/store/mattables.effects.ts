// import { Injectable } from '@angular/core';

// import { Observable, of } from 'rxjs';
// import { mergeMap, map, catchError } from 'rxjs/operators';


// /* NgRx */
// import { Action } from '@ngrx/store';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import * as mattableActions from 'mattables.action';
// import { MattablesService } from 'src/app/mattables.service';

// @Injectable()
// export class MattablesEffects {

//   constructor(private matservice: MattablesService,
//               private actions$: Actions) { }

//   @Effect()
//   loadProducts$: Observable<Action> = this.actions$.pipe(
//     ofType(productActions.ProductActionTypes.Load),
//     mergeMap(action =>
//       this.matservice.getProducts().pipe(
//         map(products => (new productActions.LoadSuccess(products))),
//         catchError(err => of(new productActions.LoadFail(err)))
//       )
//     )
//   );

// }
