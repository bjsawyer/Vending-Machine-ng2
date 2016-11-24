import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../models/product/product.component';

@Injectable()
export class ProductService {

  // private headers = new Headers({ 'ContentType': 'application/json' });
  private apiUrl = 'app/products';

  constructor(private http: Http) { }

  getProductListing(): Promise<Product[]> {
    return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response.json().data as Product[])
               .catch(this.handleError);
  }

  getProductById(id: number): Promise<Product> {
    return this.getProductListing()
      .then(products => products.find(product => product.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred.', error);
    return Promise.reject(error.message || error);
  }
}
