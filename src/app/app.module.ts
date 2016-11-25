import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryProductService } from './services/in-memory-product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListingComponent,
    ProductComponent,
    AddProductComponent,
    AddProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryProductService),
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
