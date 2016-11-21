import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product/product.component';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products = [
    new Product('Reese\'s', 1.25),
    new Product('Snickers', 1.50),
    new Product('Milky Way', 1.25)
  ];

  constructor() { }

  ngOnInit() {
  }

}
