import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class SystemPayCurdService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    if (data == null) {
      return this.http.get(Api.pay.systemPayList);
    }
    const params = new HttpParams().append('platForm', data);
    return this.http.get(Api.pay.systemPayList, { params: params });
  }

  findById(id: any) {
    return this.http.get(Api.pay.getSystemPay + id);
  }

  update(data: any, id: any) {
    return this.http.put(Api.pay.update + id, data);
  }

  save(data: any) {
    return this.http.post(Api.pay.add, data);
  }

  delete(id: any) {
    return this.http.delete(Api.pay.delete + id);
  }

  deleteList(data: any) {
    return this.http.post(Api.pay.deleteList, data);
  }
}
