import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product/product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent {

  // Note: The ID of the new product is hard-coded. This will only work once per project iteration.
  product = new Product(6, 'Hershey\'s', 1.25, 8);

  constructor(private router: Router, private productService: ProductService) { }

  onSubmit(): void {
    this.productService.addProduct(this.product);
    this.router.navigate(['/productListing']);
  }
}
