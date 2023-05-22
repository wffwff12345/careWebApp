import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class UploadService {
  constructor(private http: HttpClient) {}

  addPicture(data: any) {
    console.log(data);
    console.log(data.get('file'));
    const body = { file: data, groupNo: 'serve' };
    return this.http.post(Api.upload.addPicture, body);
  }
}
