import { InMemoryDbService } from 'angular2-in-memory-web-api';

import { Product } from '../models/product/product.component';

export class InMemoryProductService implements InMemoryDbService {
  createDb() {
    let products = [
      new Product(1, 'Snickers', 1.25, 5),
      new Product(2, 'Twix', 1.15, 3),
      new Product(3, 'Reese\'s', 1.55, 12),
      new Product(4, 'Milky Way', 1.25, 8),
      new Product(5, 'Three Musketeers', 1.00, 4)
    ];
    return { products };
  }
}
