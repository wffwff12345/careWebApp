import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STChange, STClickRowClassNameType } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ServeServiceCurdService } from 'src/app/services';

import { ServeServiceCurdEditComponent } from './edit/edit.component';
import { ServeServiceCurdViewComponent } from './view/view.component';
@Component({
  selector: 'app-serve-service-curd',
  templateUrl: './service-curd.component.html'
})
export class ServeServiceCurdComponent implements OnInit {
  serve: any;
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '服务名称'
      }
    }
  };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '服务ID', index: 'id', sort: true },
    { title: '服务编号', index: 'no', sort: true },
    { title: '服务名称', index: 'name' },
    { title: '图片ID', index: 'thumbnailId' },
    { title: '图片地址', type: 'img', index: 'thumbnailPath' },
    { title: '价格', index: 'price', sort: true },
    { title: '服务类别编号', index: 'categoryNo' },
    { title: '描述', index: 'description' },
    //{ title: '描述图片', index: 'imgList' },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          icon: 'view',
          type: 'modal',
          modal: { component: ServeServiceCurdViewComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: { component: ServeServiceCurdEditComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        }
      ]
    }
  ];

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: ServeServiceCurdService) {}

  ngOnInit(): void {
    this.findServeList();
  }

  add(): void {
    this.modal.createStatic(ServeServiceCurdEditComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  findServeList(): void {
    this.service.findList().subscribe((res: any) => {
      console.log(res);
      this.serve = res.data.items;
    });
  }

  _click(event: STChange): void {
    console.log(event);
  }
}
