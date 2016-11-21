import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
const routes: Routes = [
  { path: '', redirectTo: 'productListing', pathMatch: 'full' },
  { path: 'productListing', component: ProductListingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
