import { Component, OnInit, ViewChild } from '@angular/core';
import {
  STColumn,
  STComponent,
  STChange,
  STClickRowClassNameType,
  STContextmenuFn,
  STContextmenuItem,
  STContextmenuOptions
} from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DeviceService } from 'src/app/services';

import { DeviceCurdEditComponent } from './edit/edit.component';
import { DeviceCurdViewComponent } from './view/view.component';
@Component({
  selector: 'app-device-curd',
  templateUrl: './curd.component.html'
})
export class DeviceCurdComponent implements OnInit {
  device: any;
  delete: any = [];
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
    { title: '设备ID', index: 'id', type: 'checkbox' },
    { title: '设备序列号', index: 'deviceSerial', sort: true },
    {
      title: '设备名称',
      index: 'name',
      filter: {
        type: 'keyword',
        placeholder: '输入后按回车搜索',
        fn: (filter, record) => !filter.value || record.name.indexOf(filter.value) !== -1
      }
    },
    { title: '设备类型', index: 'deviceType', type: 'enum', enum: { '0': '摄像头', '1': '检测设备' } },
    { title: '验证码', index: 'verifyCode' },
    { title: '用户编号', index: 'userNo' },
    {
      title: '操作',
      buttons: [
        {
          text: '查看',
          type: 'modal',
          modal: { component: DeviceCurdViewComponent }
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: DeviceCurdEditComponent,
            params(record): any {
              return (record.flag = true);
            }
          },
          click: (_record, modal) => this.findDeviceList()
        },
        {
          text: '删除',
          icon: 'delete',
          click: i => {
            this.service.delete(i.id).subscribe((res: any) => {
              if (res.error == '0') {
                this.message.success('成功删除');
                this.findDeviceList();
              }
            });
          }
        }
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private message: NzMessageService, private service: DeviceService) {}

  ngOnInit(): void {
    this.findDeviceList();
  }

  search(event: any): void {
    const name = `~=${event.name}` + '';
    this.findDeviceList(name);
  }

  reset(event: any): void {
    this.findDeviceList();
  }

  add(): void {
    this.modal.createStatic(DeviceCurdEditComponent, { record: { flag: false } }).subscribe(() => this.findDeviceList());
  }

  findDeviceList(name?: any): void {
    this.service.findList(name).subscribe((res: any) => {
      this.device = res.data.items;
    });
  }

  _click(event: STChange): void {
    console.log(event);
    if (event.type == 'checkbox') {
      console.log('checkbox');
      this.delete = event.checkbox?.map((item: any) => item.id);
      console.log(this.delete);
    }
  }

  deleteClick(event: any): void {
    this.service.deleteList(this.delete).subscribe((res: any) => {
      if (res.error == '0') {
        this.message.success('成功删除');
        this.findDeviceList();
      }
    });
  }

  handleContextmenu: STContextmenuFn = (options): STContextmenuItem[] => {
    return [
      {
        text: '查看',
        fn: () => this.modal.createStatic(DeviceCurdViewComponent, { record: options.data }).subscribe(() => console.log('查看'))
      },

      {
        text: '编辑',
        fn: () =>
          this.modal
            .createStatic(DeviceCurdEditComponent, { record: { ...options.data, flag: true } })
            .subscribe(() => this.findDeviceList())
      },

      {
        text: '删除',
        fn: () => this.deleteClick(options.data)
      }
    ];
  };
}
