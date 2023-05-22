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
  picList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: ''
    }
  ];
  imgList: NzUploadFile[] = [];
  @ViewChild('sf', { static: false }) sf!: SFComponent;
  schema: SFSchema = {
    properties: {
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
      categoryNo: { type: 'string', title: '服务类别编号', enum: [] },
      thumbnailPath: {
        type: 'string',
        title: '图片',
        ui: {
          widget: 'custom'
        }
      },
      description: { type: 'string', title: '描述' },
      imgList: {
        type: 'string',
        title: '详情图片',
        ui: {
          widget: 'custom'
        }
      }
    },
    required: ['no', 'name', 'thumbnailPath', 'price', 'categoryNo']
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
    console.log(this.record.thumbnailPath);
    this.picList[0].url = this.record.thumbnailPath;
    this.findCategoryList();
  }

  save(value: any): void {
    delete value.flag;
    delete value._rowClassName;
    console.log(value);
    /* const pic = value.thumbnailPath.data;
    value = { ...value, thumbnailId: pic.id, thumbnailPath: pic.path };
    if (this.record.id) {
      this.service.update(value, this.record.id).subscribe((res: any) => {
        this.sucess(res);
      });
    } else {
      this.service.save(value).subscribe((res: any) => {
        this.sucess(res);
      });
    } */
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
      // this.schema.properties!['thumbnailPath'].enum = this.record.thumbnailPath;
      this.sf.refreshSchema();
    });
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

  changeImage(event: any) {
    console.log(event);
  }
  // 上传
  picListUpload = (file: any) => {
    const fd = new FormData();
    console.log(file);
    console.log(file.file);
    fd.append('file', file.file as any, file.file.name);
    console.log(fd.get('file'));
    return this.uploadService.addPicture(fd).subscribe((res: any) => {
      console.log(res);
    });
  };
}
