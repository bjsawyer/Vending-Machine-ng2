import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product/product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectedProduct: Product = {
    id: 1,
    name: 'Test Product',
    cost: 1.25
  };

  currentBalance: number;

  constructor() {
    this.currentBalance = 0.00;
   }

  ngOnInit() {
  }

  addQuarter() {
    this.currentBalance += 0.25;
  }

  addDollar() {
    this.currentBalance += 1.00;
  }
}
