import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STChange, STClickRowClassNameType } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SystemRecommendService } from 'src/app/services/system/recommend.service';

import { SystemUserCurdEditComponent } from './edit/edit.component';
import { SystemUserCurdViewComponent } from './view/view.component';
@Component({
  selector: 'app-system-user-curd',
  templateUrl: './user-curd.component.html'
})
export class SystemUserCurdComponent implements OnInit {
  recommend: any;
  searchSchema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '标题'
      }
    }
  };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '推荐ID', index: 'id' },
    { title: '图片ID', index: 'thumbnailId' },
    { title: '图片地址', type: 'img', index: 'thumbnailPath' },
    { title: 'URL', index: 'url' },
    { title: '标题', index: 'title' },
    { title: '描述', index: 'description' },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          type: 'modal',
          modal: { component: SystemUserCurdViewComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: { component: SystemUserCurdEditComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        }
      ]
    }
  ];

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: SystemRecommendService) {}

  ngOnInit(): void {
    this.findRecommendList();
  }

  add(): void {
    this.modal.createStatic(SystemUserCurdEditComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  findRecommendList(): void {
    this.service.findList().subscribe((res: any) => {
      console.log(res);
      this.recommend = res.data.items;
    });
  }

  _click(event: STChange): void {
    console.log(event);
  }
}
