import { Component, OnInit, ViewChild } from '@angular/core';
import { SFSchema, SFUISchema, SFComponent } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UserService, DeviceService } from 'src/app/services';
@Component({
  selector: 'app-device-curd-edit',
  templateUrl: './edit.component.html'
})
export class DeviceCurdEditComponent implements OnInit {
  record: any = {};
  @ViewChild('sf', { static: false }) sf!: SFComponent;
  schema: SFSchema = {
    properties: {
      deviceSerial: { type: 'string', title: '设备序列号', readOnly: false },
      verifyCode: { type: 'string', title: '验证码' },
      name: { type: 'string', title: '设备名称' },
      deviceType: {
        type: 'string',
        title: '设备类型',
        enum: [
          { label: '摄像头', value: '0' },
          { label: '检测设备', value: '1' }
        ]
      },
      userNo: {
        type: 'string',
        title: '用户编号',
        enum: []
      }
    },
    required: ['deviceSerial', 'verifyCode', 'name', 'deviceType', 'userNo']
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
      grid: { span: 25 }
    }
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    private userService: UserService,
    private deviceService: DeviceService,
    public http: _HttpClient
  ) {}

  ngOnInit(): void {
    this.findUserList();
  }

  save(value: any): void {
    delete value.flag;
    delete value._rowClassName;
    if (this.record.id) {
      this.deviceService.update(value, this.record.id).subscribe((res: any) => {
        this.sucess(res);
      });
    } else {
      this.deviceService.save(value).subscribe((res: any) => {
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

  findUserList(data?: any): void {
    this.userService.findList(data).subscribe((res: any) => {
      const array = res.data.items.map((item: any) => item.no);
      this.schema.properties!['userNo'].enum = array;
      if (this.record.flag) this.schema.properties!['deviceSerial'].readOnly = this.record.flag;
      this.sf.refreshSchema();
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
