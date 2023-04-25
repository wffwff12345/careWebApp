import { Component, OnInit } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CameraService } from 'src/app/services';
@Component({
  selector: 'app-camera-curd-edit',
  templateUrl: './edit.component.html'
})
export class CameraCurdEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      deviceSerial: { type: 'string', title: '设备序号', readOnly: this.record.flag },
      verifyCode: { type: 'string', title: '验证码', readOnly: this.record.flag },
      name: { type: 'string', title: '设备名称' }
    },
    required: ['deviceSerial', 'verifyCode', 'name']
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

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, private service: CameraService, public http: _HttpClient) {}

  ngOnInit(): void {
    console.log(this.record.flag);
    if (this.record.id) {
      this.service.findById(this.record.id).subscribe((res: any) => {
        this.i = res.data;
      });
    }
  }
  save(value: any): void {
    this.service.update(value, this.record.id).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
