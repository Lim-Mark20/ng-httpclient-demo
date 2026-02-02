import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})

export class Httpclient {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private productsUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    const cachedUsers = localStorage.getItem('users');
    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    }
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(users => localStorage.setItem('users', JSON.stringify(users)))
    );
  }

  getProductsRemotely(): Observable<Product[]> {
    const cachedProducts = localStorage.getItem('products');
    if (cachedProducts) {
      return of(JSON.parse(cachedProducts));
    }
    return this.http.get<{ products: Product[] }>(this.productsUrl).pipe(
      map(response => response.products),
      tap(products => localStorage.setItem('products', JSON.stringify(products)))
    );
  }
}
