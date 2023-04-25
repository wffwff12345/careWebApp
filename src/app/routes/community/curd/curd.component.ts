import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STChange, STClickRowClassNameType } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommunityService } from 'src/app/services';

import { CommunityCurdEditComponent } from './edit/edit.component';
import { CommunityCurdViewComponent } from './view/view.component';

@Component({
  selector: 'app-community-curd',
  templateUrl: './curd.component.html'
})
export class CommunityCurdComponent implements OnInit {
  community: any;
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '社区名称'
      }
    }
  };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '社区ID', index: 'id', sort: true },
    { title: '社区编号', index: 'no', sort: true },
    { title: '社区名称', index: 'name' },
    { title: '父社区编号', index: 'parentNo', sort: true },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          icon: 'view',
          type: 'modal',
          modal: { component: CommunityCurdViewComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: { component: CommunityCurdEditComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        }
      ]
    }
  ];

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: CommunityService) {}

  ngOnInit(): void {
    this.findCommunityList();
  }

  add(): void {
    this.modal.createStatic(CommunityCurdEditComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  findCommunityList(): void {
    this.service.findList().subscribe((res: any) => {
      this.community = res.data.items;
    });
  }

  _click(event: STChange): void {
    console.log(event);
  }
}
