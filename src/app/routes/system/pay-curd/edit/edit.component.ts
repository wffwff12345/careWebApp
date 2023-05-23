import { Component, OnInit } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { SystemPayCurdService } from 'src/app/services';

@Component({
  selector: 'app-system-pay-curd-edit',
  templateUrl: './edit.component.html'
})
export class SystemPayCurdEditComponent implements OnInit {
  record: any = {};
  schema: SFSchema = {
    properties: {
      platForm: { type: 'string', title: '支付平台' },
      mchId: { type: 'string', title: '商户号' },
      appId: { type: 'string', title: '小程序ID' },
      appSecret: { type: 'string', title: '小程序SECRET' },
      certClient: { type: 'string', title: '证书上传地址' },
      certKey: { type: 'string', title: '证书密钥' },
      apiKey: { type: 'string', title: 'API密钥' },
      aliPublicKey: { type: 'string', title: '支付宝公钥' },
      privateKey: { type: 'string', title: '支付宝私钥' },
      notifyUrl1: { type: 'string', title: '回调接口1' },
      notifyUrl2: { type: 'string', title: '回调接口2' },
      notifyUrl3: { type: 'string', title: '回调接口3' }
    },
    required: ['platForm', 'appId', 'appSecret', 'mchId', 'apiKey', 'certClient', 'certKey', 'notifyUrl1']
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
    private service: SystemPayCurdService
  ) {}

  ngOnInit(): void {}

  save(value: any): void {
    delete value.flag;
    delete value._rowClassName;
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

  close(): void {
    this.modal.destroy();
  }
}
