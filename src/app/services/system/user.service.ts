import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class SystemUserCurdService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    if (data == null) {
      return this.http.get(Api.user.userList);
    }
    const params = new HttpParams().append('name', data);
    return this.http.get(Api.user.userList, { params: params });
  }

  findById(id: any) {
    return this.http.get(Api.user.getUser + id);
  }

  update(data: any, id: any) {
    return this.http.put(Api.user.update + id, data);
  }

  save(data: any) {
    return this.http.post(Api.user.add, data);
  }

  delete(id: any) {
    return this.http.delete(Api.user.delete + id);
  }

  deleteList(data: any) {
    return this.http.post(Api.user.deleteList, data);
  }
}
