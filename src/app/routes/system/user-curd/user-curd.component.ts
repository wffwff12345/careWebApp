import { Component, OnInit, ViewChild } from '@angular/core';
import {
  STColumn,
  STComponent,
  STChange,
  STClickRowClassNameType,
  STContextmenuFn,
  STContextmenuItem,
  STContextmenuOptions,
  STColumnTag
} from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SystemUserCurdService } from 'src/app/services';

import { SystemUserCurdEditComponent } from './edit/edit.component';
import { SystemUserCurdViewComponent } from './view/view.component';

const TAG: STColumnTag = {
  '0': { text: '禁用', color: 'red' },
  '1': { text: '启用', color: 'green' },
  ROLE_AGED: { text: '老人', color: 'green' },
  ROLE_STAFF: { text: '职员', color: 'green' },
  ROLE_ADMIN: { text: '管理员', color: 'green' }
};
@Component({
  selector: 'app-system-user-curd',
  templateUrl: './user-curd.component.html'
})
export class SystemUserCurdComponent implements OnInit {
  user: any;
  delete: any = [];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '用户名称'
      }
    }
  };

  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '用户ID', index: 'id', type: 'checkbox' },
    {
      title: '用户编号',
      index: 'no',
      filter: {
        type: 'keyword',
        placeholder: '输入后按回车搜索',
        fn: (filter, record) => !filter.value || record.no.indexOf(filter.value) !== -1
      }
    },
    { title: '用户名称', index: 'name' },
    { title: '用户头像', type: 'img', index: 'avatarPath' },
    { title: '角色', index: 'role', type: 'tag', tag: TAG },
    { title: '状态', index: 'status', type: 'tag', tag: TAG },
    {
      title: '操作',
      buttons: [
        {
          text: '查看',
          type: 'modal',
          modal: { component: SystemUserCurdViewComponent }
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: SystemUserCurdEditComponent,
            params(record): any {
              return (record.flag = true);
            }
          },
          click: (_record, modal) => this.findUserList()
        },
        {
          text: '删除',
          icon: 'delete',
          click: i => {
            this.deleteRow(i);
          }
        }
      ]
    }
  ];

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: SystemUserCurdService) {}

  ngOnInit(): void {
    this.findUserList();
  }

  search(event: any): void {
    const name = `~=${event.name}` + '';
    this.findUserList(name);
  }

  reset(event: any): void {
    this.findUserList();
  }

  add(): void {
    this.modal.createStatic(SystemUserCurdEditComponent, { record: { flag: false } }).subscribe(() => this.findUserList());
  }

  findUserList(name?: any): void {
    this.service.findList(name).subscribe((res: any) => {
      this.user = res.data.items;
      this.user.forEach((element: any) => {
        if (element.avatarPath) {
          element.avatarPath = `${environment.SERVER_URL}/${element.avatarPath}`;
        }
      });
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
        this.findUserList();
      }
    });
  }

  deleteRow(event: any): void {
    this.service.delete(event.id).subscribe((res: any) => {
      if (res.error == '0') {
        this.message.success('成功删除');
        this.findUserList();
      }
    });
  }

  handleContextmenu: STContextmenuFn = (options): STContextmenuItem[] => {
    return [
      {
        text: '查看',
        fn: () => this.modal.createStatic(SystemUserCurdViewComponent, { record: options.data }).subscribe(() => console.log('查看'))
      },
      {
        text: '编辑',
        fn: () =>
          this.modal
            .createStatic(SystemUserCurdEditComponent, { record: { ...options.data, flag: true } })
            .subscribe(() => this.findUserList())
      },
      {
        text: '删除',
        fn: item => this.deleteRow(options.data)
      }
    ];
  };
}
