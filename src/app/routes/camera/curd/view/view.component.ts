import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CameraService } from 'src/app/services';

@Component({
  selector: 'app-camera-curd-view',
  templateUrl: './view.component.html'
})
export class CameraCurdViewComponent implements OnInit {
  record: any = {};
  i: any;

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, private service: CameraService) {}

  ngOnInit(): void {
    this.service.findById(this.record.id).subscribe((res: any) => {
      this.i = res.data;
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
