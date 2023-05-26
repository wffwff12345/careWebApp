import { Component, OnInit } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { SystemRecommendService, UploadService } from 'src/app/services';

@Component({
  selector: 'app-system-recommendCurd-edit',
  templateUrl: './edit.component.html'
})
export class SystemRecommendCurdEditComponent implements OnInit {
  record: any = {};
  picList: NzUploadFile[] = [];
  picIdList: string[] = [];

  schema: SFSchema = {
    properties: {
      title: { type: 'string', title: '标题' },
      description: { type: 'string', title: '描述' },
      thumbnailPath: {
        type: 'string',
        title: '图片',
        ui: {
          widget: 'custom'
        }
      }
    },
    required: ['title']
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 }
    },
    $no: {
      widget: 'text'
    },
    $href: {
      widget: 'string'
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 }
    }
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    private recommendService: SystemRecommendService,
    private uploadService: UploadService
  ) {}

  ngOnInit(): void {
    this.handlePicList();
  }

  handlePicList() {
    if (this.record.flag) {
      let pic: any = {
        uid: '-1',
        name: `image.png`,
        status: 'done',
        url: this.record.thumbnailPath
      };
      this.picIdList.push(this.record.thumbnailId);
      this.picList.push(pic);
    }
  }

  save(value: any): void {
    delete value.flag;
    delete value._rowClassName;
    value.thumbnailId = this.picIdList[0];
    var url = this.picList[0].url?.replace(`${environment.SERVER_URL}/`, '');
    value.thumbnailPath = url;
    value.url = `/${url?.split('/')[1]}/`;
    if (this.record.id) {
      this.recommendService.update(value, this.record.id).subscribe((res: any) => {
        this.sucess(res);
      });
    } else {
      this.recommendService.save(value).subscribe((res: any) => {
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

  close(): void {
    this.modal.destroy();
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.picList = this.picList.concat(file);
    return true;
  };

  picChange(file: any) {
    file.file.status = 'done';
    if (file.type == 'removed') {
      this.record.thumbnailPath = null;
      this.picList = [];
    }
  }

  // 上传
  picListUpload = (file: any) => {
    const fd = new FormData();
    fd.append('file', file.file as any, file.file.name);
    fd.append('groupNo', 'recommend');
    return this.uploadService.addPicture(fd).subscribe((res: any) => {
      this.picIdList[0] = res.data.id;
      const url = `${environment.SERVER_URL}/${res.data.path}`;
      this.picList[0].url = url;
    });
  };
}
