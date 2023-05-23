import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-system-recommendCurd-view',
  templateUrl: './view.component.html'
})
export class SystemRecommendCurdViewComponent implements OnInit {
  record: any = {};

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, private http: _HttpClient) {}

  ngOnInit(): void {}

  close(): void {
    this.modal.destroy();
  }
}
