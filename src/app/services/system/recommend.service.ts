import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/core/config/api';
@Injectable({ providedIn: 'root' })
export class SystemRecommendService {
  constructor(private http: HttpClient) {}

  findList(data?: any) {
    if (data == null) {
      return this.http.get(Api.recommend.recommendList);
    }
    const params = new HttpParams().append('title', data);
    return this.http.get(Api.recommend.recommendList, { params: params });
  }

  findById(id: any) {
    return this.http.get(Api.recommend.getRecommend + id);
  }

  update(data: any, id: any) {
    return this.http.put(Api.recommend.update + id, data);
  }

  save(data: any) {
    return this.http.post(Api.recommend.add, data);
  }

  delete(id: any) {
    return this.http.delete(Api.recommend.delete + id);
  }

  deleteList(data: any) {
    return this.http.post(Api.recommend.deleteList, data);
  }
}
