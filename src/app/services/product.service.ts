import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../models/product/product.component';

@Injectable()
export class ProductService {

  private headers = new Headers({ 'ContentType': 'application/json' });
  private apiUrl = 'app/products';

  constructor(private http: Http) { }

  // GET all products  
  getProductListing(): Promise<Product[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  // GET product by ID  
  getProductById(id: number): Promise<Product> {
    let getByIdUrl = this.apiUrl + '/' + id;
    return this.http.get(getByIdUrl)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  addProduct(product: Product) {
    return this.http
      .post(this.apiUrl, JSON.stringify({ id: product.id, name: product.name, cost: product.cost }), { headers: this.headers })
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred.', error);
    return Promise.reject(error.message || error);
  }
}
