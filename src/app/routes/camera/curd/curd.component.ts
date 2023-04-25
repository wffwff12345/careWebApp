import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STChange, STClickRowClassNameType } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CameraService } from 'src/app/services';

import { CameraCurdEditComponent } from './edit/edit.component';
import { CameraCurdViewComponent } from './view/view.component';
@Component({
  selector: 'app-camera-curd',
  templateUrl: './curd.component.html'
})
export class CameraCurdComponent implements OnInit {
  camera: any;
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '设备名称'
      }
    }
  };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '设备ID', index: 'id' },
    { title: '设备序号', index: 'deviceSerial' },
    { title: '验证码', index: 'verifyCode' },
    { title: '设备名称', index: 'name' },
    { title: '用户编号', index: 'userNo' },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          icon: 'view',
          type: 'modal',
          modal: { component: CameraCurdViewComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: CameraCurdEditComponent,
            params(record): any {
              return (record.flag = true);
            }
          },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        }
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private message: NzMessageService, private service: CameraService) {}

  ngOnInit(): void {
    this.findCameraList();
  }

  add(): void {
    this.modal.createStatic(CameraCurdEditComponent, { i: { id: 0 }, record: { flag: false } }).subscribe(() => this.st.reload());
  }
  findCameraList(): void {
    this.service.findList().subscribe((res: any) => {
      console.log(res);
      this.camera = res.data.items;
    });
  }

  _click(event: STChange): void {
    console.log(event);
  }
}
