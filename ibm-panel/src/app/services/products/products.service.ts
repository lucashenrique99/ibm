import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CrudInterface } from '../interface/crud-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements CrudInterface<Product, number> {

  products: Array<Product> = [];
  products$: BehaviorSubject<Array<Product>>;

  constructor(
    private http: HttpClient
  ) {
    this.products$ = new BehaviorSubject(this.products);
  }

  findAll(): Observable<Array<Product>> {
    // return this.products$;
    return this.http.get<Array<Product>>(`${environment.apiURL}/products`);
  }

  findById(id: number): Observable<Product> {
    // const products = this.products.find(u => u.id == id);
    // return new BehaviorSubject(products ? products : null);
    return this.http.get<Product>(`${environment.apiURL}/products/${id}`);
  }

  save(product: any): Observable<Product> {
    return (product.id) ? this.update(product) : this.insert(product);
  }

  private insert(product: Product): Observable<Product> {
    // if (!product.id) {
    //   product.id = Math.ceil(Math.random() * 1000);
    // }
    // this.products.push(product);
    // this.products$.next(this.products);

    // return new BehaviorSubject(product);
    return this.http.post<Product>(`${environment.apiURL}/products`, product);
  }

  private update(product: Product): Observable<Product> {
    // this.products = this.products.filter(u => u.id != product.id);
    // return this.insert(product);
    return this.http.put<Product>(`${environment.apiURL}/products/${product.id}`, product);
  }

  delete(id: number): Observable<Product> {
    // this.products = this.products.filter(u => u.id != id);
    // this.products$.next(this.products);
    // return new BehaviorSubject(null);
    return this.http.delete<Product>(`${environment.apiURL}/products/${id}`);
  }
}

export interface Product {

  id: number;
  name: string;
  description: string;
  price: number;
  images: Array<string>;

}