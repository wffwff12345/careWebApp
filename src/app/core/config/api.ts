import { Injectable } from '@angular/core';

@Injectable()
export class Api {
  public static readonly login: string = '/login';

  static camera = class {
    public static readonly add: string = '/api/camera';
    public static readonly delete: string = '/api/camera/';
    public static readonly deleteList: string = '/api/camera/delete';
    public static readonly update: string = '/api/camera/';
    public static readonly getCamera: string = '/api/camera/';
    public static readonly cameraList: string = '/api/camera/page';
  };

  static community = class {
    public static readonly add: string = '/api/community';
    public static readonly delete: string = '/api/community/';
    public static readonly deleteList: string = '/api/community/delete';
    public static readonly update: string = '/api/community/';
    public static readonly getCommunity: string = '/api/community/';
    public static readonly communityList: string = '/api/community/page';
  };

  static serve = class {
    public static readonly add: string = '/api/serve';
    public static readonly delete: string = '/api/serve/';
    public static readonly deleteList: string = '/api/serve/delete';
    public static readonly update: string = '/api/serve/';
    public static readonly getServe: string = '/api/serve/';
    public static readonly serveList: string = '/api/serve/page';
  };

  static serveCategory = class {
    public static readonly add: string = '/api/serve-category';
    public static readonly delete: string = '/api/serve-category/';
    public static readonly deleteList: string = '/api/serve-category/delete';
    public static readonly update: string = '/api/serve-category/';
    public static readonly getServeCategory: string = '/api/serve-category/';
    public static readonly serveCategoryList: string = '/api/serve-category/page';
  };

  static pay = class {
    public static readonly add: string = '/api/paySet';
    public static readonly delete: string = '/api/paySet/';
    public static readonly deleteList: string = '/api/paySet/delete';
    public static readonly update: string = '/api/paySet/';
    public static readonly getSystemPay: string = '/api/paySet/';
    public static readonly systemPayList: string = '/api/paySet/page';
  };

  static recommend = class {
    public static readonly add: string = '/api/recommend';
    public static readonly delete: string = '/api/recommend/';
    public static readonly deleteList: string = '/api/recommend/delete';
    public static readonly update: string = '/api/recommend/';
    public static readonly getRecommend: string = '/api/recommend/';
    public static readonly recommendList: string = '/api/recommend/page';
  };
}
