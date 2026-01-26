import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})

export class Httpclient {
  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getProductsRemotely(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>('https://dummyjson.com/products')
      .pipe(
        map(response => response.products)
      );
  }
}
