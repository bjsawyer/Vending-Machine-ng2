import { Injectable } from '@angular/core';

import { Product } from '../models/product/product.component';
import { PRODUCTS } from '../mock-product-listing';

@Injectable()
export class ProductService {

  constructor() { }

  getProductListing(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
}
