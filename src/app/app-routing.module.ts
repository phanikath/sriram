import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnecomponentComponent } from './onecomponent/onecomponent.component';
import { TwocomponentComponent } from './twocomponent/twocomponent.component';
import { ProductComponent } from './product/product.component';
import { DoNotShowSecondaryOnRefreshGuard } from './DoNotShowSecondaryOnRefreshGuard';

const routes: Routes = [
  { path: '', redirectTo: '/one', pathMatch: 'full' },
  { path: 'one', component: OnecomponentComponent  },
  { path: 'two', component: TwocomponentComponent, 
  canActivate: [ DoNotShowSecondaryOnRefreshGuard ] },
  { path: 'prod', component: ProductComponent , data: { state: 'prod' } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
