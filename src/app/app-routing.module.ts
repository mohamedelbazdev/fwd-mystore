import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: ProductsListComponent },
  { path: 'product/:name', component: ProductItemDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirm-order', component: ConfirmOrderComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
