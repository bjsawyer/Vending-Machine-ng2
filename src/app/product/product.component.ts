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
    this.currentBalance = 0;
    this.subscription = this.route.params.subscribe(params => this.id = +params['id']);
    this.productService.getProductById(this.id).then(product => self.selectedProduct = product);
  }

  checkIfBalanceEqualsCost(): void {
    this.balanceEqualsCost = this.currentBalance === this.selectedProduct.cost;
  }

  addMoney(amount: number): void {
    this.currentBalance += amount;
    this.currentBalance = this.roundDecimal(this.currentBalance);
    this.checkIfBalanceEqualsCost();
  }

  roundDecimal(amount: number): number {
      return Math.round(amount * 100) / 100;
  }

  addNickel(): void {
    this.addMoney(.05);
  }

  addDime(): void {
    this.addMoney(.1);
  }

  addQuarter(): void {
    this.addMoney(.25);
  }

  addDollar(): void {
    this.addMoney(1);
  }

  resetBalance(): void {
    this.currentBalance = 0;
    this.checkIfBalanceEqualsCost();
  }

  colorBalance(): Object {
    let color: string;
    if (this.selectedProduct) {
      if (this.balanceEqualsCost) {
        color = '#33CC33'; // green
      } else if (this.currentBalance > this.selectedProduct.cost) {
        color = 'red';
      }
    }
    return {
      'color': color
    };
  }

  confirmPurchase(): void {
      let self = this;
      this.selectedProduct.quantity -= 1;
      this.productService.updateProduct(this.selectedProduct)
          .then(product => self.router.navigate(['/productListing']));
  }
}
