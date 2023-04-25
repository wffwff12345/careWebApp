import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class ServeServiceCurdService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    return this.http.get(Api.serve.serveList, data);
  }

  findById(id: any) {
    return this.http.get(Api.serve.getServe + id);
  }

  update(data: any, id: any) {
    return this.http.post(Api.serve.update + id, data);
  }

  save(data: any) {
    return this.http.post(Api.serve.add, data);
  }

  delete(id: any) {
    return this.http.delete(Api.serve.delete + id);
  }
}
