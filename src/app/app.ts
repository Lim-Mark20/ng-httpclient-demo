import { User } from './user.model';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-httpclient-demo');
  httpusers: User[] = [];
  httpproducts: Product[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });
    this.httpClient.getProductsRemotely().subscribe((data) => {
      this.httpproducts = data;
    });
  }
}
