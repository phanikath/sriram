import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OnecomponentComponent } from './onecomponent/onecomponent.component';
import { TwocomponentComponent } from './twocomponent/twocomponent.component';
import { UserserviceService } from './userservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OnecomponentComponent,
    TwocomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
