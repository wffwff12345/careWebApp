import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class CameraService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    return this.http.get(Api.camera.cameraList, data);
  }

  findById(id: any) {
    return this.http.get(Api.camera.getCamera + id);
  }

  update(data: any, id: any) {
    return this.http.post(Api.camera.update + id, data);
  }

  save(data: any) {
    return this.http.post(Api.camera.add, data);
  }

  delete(id: any) {
    return this.http.delete(Api.camera.delete + id);
  }
}
