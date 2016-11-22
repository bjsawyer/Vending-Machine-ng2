import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product/product.component';
import { Router } from '@angular/router';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  private products: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductListing().then(products => this.products = products);
  }

  onSelect(product: Product) {
    this.router.navigate(['/selectedProduct', product.id]);
  }
}
