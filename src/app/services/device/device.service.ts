import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class DeviceService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    if (data == null) {
      return this.http.get(Api.device.deviceList);
    }
    const params = new HttpParams().append('name', data);
    return this.http.get(Api.device.deviceList, { params: params });
  }

  findById(id: any) {
    return this.http.get(Api.device.getDevice + id);
  }

  update(data: any, id: any) {
    return this.http.put(Api.device.update + id, data);
  }

  save(data: any) {
    return this.http.post(Api.device.add, data);
  }

  delete(id: any) {
    return this.http.delete(Api.device.delete + id);
  }

  deleteList(data: any) {
    return this.http.post(Api.device.deleteList, data);
  }
}
