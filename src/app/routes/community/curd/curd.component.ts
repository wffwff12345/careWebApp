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
import { CommunityService } from 'src/app/services';

import { CommunityCurdEditComponent } from './edit/edit.component';
import { CommunityCurdViewComponent } from './view/view.component';

@Component({
  selector: 'app-community-curd',
  templateUrl: './curd.component.html'
})
export class CommunityCurdComponent implements OnInit {
  community: any;
  delete: any = [];
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
    { title: '社区ID', index: 'id', type: 'checkbox' },
    { title: '社区编号', index: 'no', sort: true },
    { title: '社区名称', index: 'name' },
    { title: '父社区编号', index: 'parentNo', sort: true },
    {
      title: '操作',
      buttons: [
        {
          text: '查看',
          type: 'modal',
          modal: { component: CommunityCurdViewComponent }
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: CommunityCurdEditComponent,
            params(record): any {
              return (record.flag = true);
            }
          },
          click: (_record, modal) => this.findCommunityList()
        },
        {
          text: '删除',
          icon: 'delete',
          click: i => {
            this.deleteClick(i);
          }
        }
      ]
    }
  ];

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: CommunityService) {}

  ngOnInit(): void {
    this.findCommunityList();
  }
  search(event: any): void {
    const name = `~=${event.name}` + '';
    this.findCommunityList(name);
  }

  reset(event: any): void {
    this.findCommunityList();
  }

  add(): void {
    this.modal.createStatic(CommunityCurdEditComponent, { record: { flag: false } }).subscribe(() => this.findCommunityList());
  }

  findCommunityList(name?: any): void {
    this.service.findList(name).subscribe((res: any) => {
      this.community = res.data.items;
    });
  }

  _click(event: STChange): void {
    if (event.type == 'checkbox') {
      this.delete = event.checkbox?.map((item: any) => item.id);
    }
  }

  deleteClick(event: any): void {
    this.service.deleteList(this.delete).subscribe((res: any) => {
      if (res.error == '0') {
        this.message.success('成功删除');
        this.findCommunityList();
      }
    });
  }

  deleteRow(event: any): void {
    this.service.delete(event.id).subscribe((res: any) => {
      if (res.error == '0') {
        this.message.success('成功删除');
        this.findCommunityList();
      }
    });
  }

  handleContextmenu: STContextmenuFn = (options): STContextmenuItem[] => {
    return [
      {
        text: '查看',
        fn: () => this.modal.createStatic(CommunityCurdViewComponent, { record: options.data }).subscribe(() => console.log('查看'))
      },

      {
        text: '编辑',
        fn: () =>
          this.modal
            .createStatic(CommunityCurdEditComponent, { record: { ...options.data, flag: true } })
            .subscribe(() => this.findCommunityList())
      },

      {
        text: '删除',
        fn: item => this.deleteRow(options.data)
      }
    ];
  };
}
