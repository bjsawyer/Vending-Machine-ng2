import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  testProduct: Product = {
    name: 'Test Product',
    cost: 1.25
  };

  constructor() {
  }

  ngOnInit() {
  }

}
