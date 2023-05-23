import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SFSchema, SFUISchema, SFComponent, SFUploadWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ServeServiceCurdService, ServeCategoryCurdService, UploadService } from 'src/app/services';
@Component({
  selector: 'app-serve-service-curd-edit',
  templateUrl: './edit.component.html'
})
export class ServeServiceCurdEditComponent implements OnInit {
  record: any = {};
  array: string[] = [];
  picList: NzUploadFile[] = [];
  imgList: NzUploadFile[] = [];
  picIdList: string[] = ['1'];
  @ViewChild('sf', { static: false }) sf!: SFComponent;
  schema: SFSchema = {
    properties: {
      categoryNo: { type: 'string', title: '服务类别编号', enum: [] },
      no: {
        type: 'string',
        title: '服务编号',
        ui: {
          showRequired: true,
          validator: val => (this.array.includes(val) && this.record.no !== val ? [{ keyword: 'not', message: '服务编号重复' }] : [])
        }
      },
      name: { type: 'string', title: '服务名称' },
      price: { type: 'string', title: '价格' },
      description: { type: 'string', title: '描述' },
      thumbnailPath: {
        type: 'string',
        title: '图片',
        ui: {
          widget: 'custom'
        }
      },
      imgList: {
        type: 'string',
        title: '详情图片',
        ui: {
          widget: 'custom'
        }
      }
    },
    required: ['no', 'name', 'price', 'categoryNo']
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 150,
      grid: { span: 12 }
    },
    $href: {
      widget: 'string'
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 }
    }
  };
  $event: any;

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    private service: ServeServiceCurdService,
    private categoryService: ServeCategoryCurdService,
    private uploadService: UploadService
  ) {}

  ngOnInit(): void {
    this.findCategoryList();
    this.handleImgList();
  }

  save(value: any): void {
    delete value.flag;
    delete value._rowClassName;
    value.thumbnailId = this.picIdList[0];
    value.thumbnailPath = this.picList[0].url?.replace(`${environment.SERVER_URL}/`, '');
    const array = this.imgList.map((img: any) => img.url?.replace(`${environment.SERVER_URL}/`, ''));
    value.imgList = [...array];
    console.log(value);
    if (this.record.id) {
      this.service.update(value, this.record.id).subscribe((res: any) => {
        this.sucess(res);
      });
    } else {
      this.service.save(value).subscribe((res: any) => {
        this.sucess(res);
      });
    }
  }

  sucess(res: any) {
    if ('0' == res.error) {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    }
  }

  findCategoryList(): void {
    this.categoryService.findList().subscribe((res: any) => {
      const array = res.data.items
        .sort((v1: any, v2: any) => {
          if (v1.no > v2.no) return 1;
          else if (v1.no < v2.no) return -1;
          else return 0;
        })
        .map((item: any) => ({ label: `${item.no}-${item.name}`, value: item.no }));
      this.schema.properties!['categoryNo'].enum = array;
      this.sf.refreshSchema();
    });
    this.service.findList().subscribe((res: any) => {
      this.array = res.data.items.map((i: any) => i.no);
      this.sf.refreshSchema();
    });
  }
  handleImgList() {
    if (this.record.flag) {
      let pic: any = {
        uid: '-1',
        name: `image.png`,
        status: 'done',
        url: this.record.thumbnailPath
      };
      this.picList.push(pic);
      if (this.record.imgList.length <= 0) {
        return;
      }
      let i: number = -1;
      this.record.imgList.forEach((element: any) => {
        let img: any = {
          uid: i.toString(),
          name: `image${++i}.png`,
          status: 'done',
          url: element
        };
        this.imgList.push(img);
      });
    }
  }

  close(): void {
    this.modal.destroy();
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.picList = this.picList.concat(file);
    return true;
  };

  imgBeforeUpload = (file: NzUploadFile): boolean => {
    this.imgList = this.imgList.concat(file);
    return true;
  };

  picChange(file: any) {
    file.file.status = 'done';
    console.log(file);
    if (file.type == 'removed') {
      this.record.thumbnailPath = null;
      this.picList = [];
      console.log(this.picList);
    }
  }

  imgChange(file: any) {
    file.file.status = 'done';
    console.log(file);
    if (file.type == 'removed') {
      console.log();
    }
  }

  // 上传
  picListUpload = (file: any) => {
    const fd = new FormData();
    fd.append('file', file.file as any, file.file.name);
    fd.append('groupNo', 'serve');
    return this.uploadService.addPicture(fd).subscribe((res: any) => {
      console.log(res);
      this.picIdList[0] = res.data.id;
      const url = `${environment.SERVER_URL}/${res.data.path}`;
      this.picList[0].url = url;
      // this.record.thumbnailPath = url;
    });
  };

  imgPicListUpload = (file: any) => {
    const fd = new FormData();
    fd.append('file', file.file as any, file.file.name);
    fd.append('groupNo', 'serve');
    return this.uploadService.addPicture(fd).subscribe((res: any) => {
      const url = `${environment.SERVER_URL}/${res.data.path}`;
      this.imgList[this.imgList.length - 1].url = url;
    });
  };
}
