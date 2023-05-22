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
import { ServeCategoryCurdService } from 'src/app/services';

import { ServeServiceCategoryCurdEditComponent } from './edit/edit.component';
import { ServeServiceCategoryCurdViewComponent } from './view/view.component';
@Component({
  selector: 'app-serve-service-category-curd',
  templateUrl: './service-category-curd.component.html'
})
export class ServeServiceCategoryCurdComponent implements OnInit {
  category: any;
  delete: any = [];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '服务类别名称'
      }
    }
  };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '服务类别ID', index: 'id', type: 'checkbox' },
    { title: '服务类别编号', index: 'no', sort: true },
    { title: '服务类别名称', index: 'name' },
    {
      title: '操作',
      buttons: [
        {
          text: '查看',
          type: 'modal',
          modal: { component: ServeServiceCategoryCurdViewComponent }
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: ServeServiceCategoryCurdEditComponent,
            params(record): any {
              return (record.flag = true);
            }
          },
          click: (_record, modal) => this.findCategoryList()
        },
        {
          text: '删除',
          icon: 'delete',
          click: i => {
            this.service.delete(i.id).subscribe((res: any) => {
              if (res.error == '0') {
                this.message.success('成功删除');
                this.findCategoryList();
              }
            });
          }
        }
      ]
    }
  ];

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: ServeCategoryCurdService) {}

  ngOnInit(): void {
    this.findCategoryList();
  }

  search(event: any): void {
    const name = `~=${event.name}` + '';
    this.findCategoryList(name);
  }

  reset(event: any): void {
    this.findCategoryList();
  }

  add(): void {
    this.modal.createStatic(ServeServiceCategoryCurdEditComponent, { record: { flag: false } }).subscribe(() => this.findCategoryList());
  }

  findCategoryList(name?: any): void {
    this.service.findList(name).subscribe((res: any) => {
      this.category = res.data.items;
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
        this.findCategoryList();
      }
    });
  }

  handleContextmenu: STContextmenuFn = (options): STContextmenuItem[] => {
    return [
      {
        text: '查看',
        fn: () =>
          this.modal.createStatic(ServeServiceCategoryCurdViewComponent, { record: options.data }).subscribe(() => console.log('查看'))
      },

      {
        text: '编辑',
        fn: () =>
          this.modal
            .createStatic(ServeServiceCategoryCurdEditComponent, { record: { ...options.data, flag: true } })
            .subscribe(() => this.findCategoryList())
      },

      {
        text: '删除',
        fn: () => this.deleteClick(options.data)
      }
    ];
  };
}
