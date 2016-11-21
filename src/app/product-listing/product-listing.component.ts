import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product/product.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products = [
    new Product(1, 'Reese\'s', 1.25),
    new Product(2, 'Snickers', 1.50),
    new Product(3, 'Milky Way', 1.25)
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSelect(product: Product) {
    this.router.navigate(['/selectedProduct', product.id]);
  }
}
