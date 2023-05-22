import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class ServeServiceCurdService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    if (data == null) {
      return this.http.get(Api.serve.serveList);
    }
    const params = new HttpParams().append('name', data);
    return this.http.get(Api.serve.serveList, { params: params });
  }

  findById(id: any) {
    return this.http.get(Api.serve.getServe + id);
  }

  update(data: any, id: any) {
    return this.http.put(Api.serve.update + id, data);
  }

  save(data: any) {
    return this.http.post(Api.serve.add, data);
  }

  delete(id: any) {
    return this.http.delete(Api.serve.delete + id);
  }

  deleteList(data: any) {
    return this.http.post(Api.serve.deleteList, data);
  }
}
