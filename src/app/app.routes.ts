import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './productlist/productlist.component';


export const routes: Routes = [
  {path: '' , component : ProductlistComponent},
  {path: 'orderplaced' , component : OrderplacedComponent},
  {path: 'cart' , component : CartComponent}
];

