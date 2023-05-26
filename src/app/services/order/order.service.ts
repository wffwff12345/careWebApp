import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  findOrderList() {
    return this.http.get(Api.order.orderList);
  }
}
