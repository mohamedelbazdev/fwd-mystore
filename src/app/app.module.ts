import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmOrderComponent,
    ProductItemComponent,
    ProductItemDetailsComponent,
    ProductsListComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
