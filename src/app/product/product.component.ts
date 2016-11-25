import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Product } from '../models/product/product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectedProduct: Product;
  currentBalance: number;
  id: number;

  private subscription: any;

  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    let self = this;
    this.currentBalance = 0.00;
    this.subscription = this.route.params.subscribe(params => this.id = +params['id']);
    this.productService.getProductById(this.id).then(product => self.selectedProduct = product);
  }

  addNickel(): void {
    this.currentBalance += 0.05;
  }

  addDime(): void {
    this.currentBalance += 0.10;
  }

  addQuarter(): void {
    this.currentBalance += 0.25;
  }

  addDollar(): void {
    this.currentBalance += 1.00;
  }

  resetBalance(): void {
    this.currentBalance = 0;
  }

  colorBalance(): Object {
    let isExactBalance = this.selectedProduct && this.currentBalance === this.selectedProduct.cost;
    let style = {
      'color': isExactBalance ? '#33CC33' : 'red'
    };
    return style;
  }
}
