import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'productListing', pathMatch: 'full' },
  { path: 'productListing', component: ProductListingComponent },
  { path: 'selectedProduct/:id', component: ProductComponent },
  { path: 'addProduct', component: AddProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
