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

  // POST new product
  addProduct(product: Product) {
    return this.http
      .post(this.apiUrl, JSON.stringify(product), { headers: this.headers })
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  // PUT update existing product
  updateProduct(product: Product): Promise<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred.', error);
    return Promise.reject(error.message || error);
  }
}
