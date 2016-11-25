import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
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
  balanceEqualsCost: boolean;

  private subscription: any;

  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
    let self = this;
    this.currentBalance = 0.00;
    this.subscription = this.route.params.subscribe(params => this.id = +params['id']);
    this.productService.getProductById(this.id).then(product => self.selectedProduct = product);
  }

  checkIfBalanceEqualsCost(): boolean {
    return this.selectedProduct && this.currentBalance === this.selectedProduct.cost;
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
    this.balanceEqualsCost = this.checkIfBalanceEqualsCost();
    let style = {
      'color': this.balanceEqualsCost ? '#33CC33' : 'red'
    };
    return style;
  }

  confirmPurchase(): void {
      let self = this;
      this.selectedProduct.quantity -= 1;
      this.productService.updateProduct(this.selectedProduct)
          .then(product => self.router.navigate(['/productListing']));
  }
}
