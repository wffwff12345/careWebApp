import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { DeviceService } from 'src/app/services';

@Component({
  selector: 'app-device-curd-view',
  templateUrl: './view.component.html'
})
export class DeviceCurdViewComponent implements OnInit {
  record: any = {};

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, private service: DeviceService) {}

  ngOnInit(): void {}

  close(): void {
    this.modal.destroy();
  }
}
