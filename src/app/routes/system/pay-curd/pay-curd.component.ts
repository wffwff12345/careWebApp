import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STChange, STClickRowClassNameType } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SystemPayCurdService } from 'src/app/services';

import { SystemPayCurdEditComponent } from './edit/edit.component';
import { SystemPayCurdViewComponent } from './view/view.component';
@Component({
  selector: 'app-system-pay-curd',
  templateUrl: './pay-curd.component.html'
})
export class SystemPayCurdComponent implements OnInit {
  pay: any;
  searchSchema: SFSchema = {
    properties: {
      platForm: {
        type: 'string',
        title: '平台名称'
      }
    }
  };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '支付ID', index: 'id', width: 200 },
    { title: '平台', index: 'platForm', width: 100 },
    { title: '小程序ID', index: 'appId', width: 150 },
    { title: '小程序SECRET', index: 'appSecret', width: 150 },
    { title: '商户号', index: 'mchId', sort: true, width: 150 },
    { title: 'API密钥', index: 'apiKey', width: 150 },
    { title: '证书上传地址', index: 'certClient', width: 150 },
    { title: '证书密钥', index: 'certKey', width: 150 },
    { title: '支付宝公钥', index: 'aliPublicKey', width: 150 },
    { title: '支付宝私钥', index: 'privateKey', width: 150 },
    { title: '回调接口1', index: 'notifyUrl1', width: 150 },
    { title: '回调接口2', index: 'notifyUrl2', width: 150 },
    { title: '回调接口3', index: 'notifyUrl3', width: 150 },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          icon: 'view',
          type: 'modal',
          modal: { component: SystemPayCurdViewComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: { component: SystemPayCurdEditComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        }
      ]
    }
  ];

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: SystemPayCurdService) {}

  ngOnInit(): void {
    this.findPayList();
  }

  add(): void {
    this.modal.createStatic(SystemPayCurdEditComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  findPayList(): void {
    this.service.findList().subscribe((res: any) => {
      console.log(res);
      this.pay = res.data.items;
    });
  }

  _click(event: STChange): void {
    console.log(event);
  }
}
