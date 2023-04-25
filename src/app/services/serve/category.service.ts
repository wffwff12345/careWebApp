import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class ServeCategoryCurdService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    return this.http.get(Api.serveCategory.serveCategoryList, data);
  }

  findById(id: any) {
    return this.http.get(Api.serveCategory.getServeCategory + id);
  }

  update(data: any, id: any) {
    return this.http.post(Api.serveCategory.update + id, data);
  }

  save(data: any) {
    return this.http.post(Api.serveCategory.add, data);
  }

  delete(id: any) {
    return this.http.delete(Api.serveCategory.delete + id);
  }
}
