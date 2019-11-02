import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CrudInterface } from '../interface/crud-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements CrudInterface<Product, number> {

  products: Array<Product> = [];
  products$: BehaviorSubject<Array<Product>>;

  constructor() {
    this.products$ = new BehaviorSubject(this.products);
  }

  findAll(): Observable<Array<Product>> {
    return this.products$;
  }

  findById(id: number): Observable<Product> {
    const products = this.products.find(u => u.id == id);
    return new BehaviorSubject(products ? products : null);
  }

  save(product: any): Observable<Product> {
    return (product.id) ? this.update(product) : this.insert(product);
  }

  private insert(product: Product): Observable<Product> {
    if (!product.id) {
      product.id = Math.ceil(Math.random() * 1000);
    }
    this.products.push(product);
    this.products$.next(this.products);

    return new BehaviorSubject(product);
  }

  private update(product: Product): Observable<Product> {
    this.products = this.products.filter(u => u.id != product.id);
    return this.insert(product);
  }
  
  delete(id: number): Observable<Product> {
    this.products = this.products.filter(u => u.id != id);
    this.products$.next(this.products);
    return new BehaviorSubject(null);
  }
}

export interface Product{

  id: number;
  name: string;
  description: string;
  price: number;
  images: Array<string>;

}