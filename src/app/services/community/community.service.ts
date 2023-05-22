import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';

@Injectable({ providedIn: 'root' })
export class CommunityService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    if (data == null) {
      return this.http.get(Api.community.communityList);
    }
    const params = new HttpParams().append('name', data);
    return this.http.get(Api.community.communityList, { params: params });
  }

  findById(id: any) {
    return this.http.get(Api.community.getCommunity + id);
  }

  update(data: any, id: any) {
    return this.http.put(Api.community.update + id, data);
  }

  save(data: any) {
    return this.http.post(Api.community.add, data);
  }

  delete(id: any) {
    return this.http.delete(Api.community.delete + id);
  }

  deleteList(data: any) {
    return this.http.post(Api.community.deleteList, data);
  }
}
