import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    if (data == null) {
      return this.http.get(Api.user.userList);
    }
    const params = new HttpParams().append('id', data);
    return this.http.get(Api.device.deviceList, { params: params });
  }
}
