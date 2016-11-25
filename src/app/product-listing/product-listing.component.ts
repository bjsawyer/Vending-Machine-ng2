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
  private selectedProduct: Product;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductListing().then(products => this.products = products);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.goToSelectedProduct();
  }

  goToSelectedProduct(): void {
    this.router.navigate(['/selectedProduct', this.selectedProduct.id]);
  }

  addProduct(): void {
    this.router.navigate(['/addProduct']);
  }
}
