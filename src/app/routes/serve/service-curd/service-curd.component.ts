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
import { environment } from '@env/environment';
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
  delete: any = [];
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
    { title: '服务ID', index: 'id', type: 'checkbox' },
    { title: '服务编号', index: 'no', sort: true, width: 150 },
    { title: '服务名称', index: 'name', width: 150 },
    { title: '图片', type: 'img', index: 'thumbnailPath', width: 100 },
    { title: '价格', index: 'price', sort: true, width: 150 },
    { title: '服务类别编号', index: 'categoryNo', width: 150, sort: true },
    { title: '描述', index: 'description', width: 150 },
    {
      title: '操作',
      width: 200,
      buttons: [
        {
          text: '查看',
          type: 'modal',
          modal: { component: ServeServiceCurdViewComponent }
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: ServeServiceCurdEditComponent,
            params(record): any {
              return (record.flag = true);
            }
          },
          click: (_record, modal) => this.findServeList()
        },
        {
          text: '删除',
          icon: 'delete',
          click: i => {
            this.service.delete(i.id).subscribe((res: any) => {
              if (res.error == '0') {
                this.message.success('成功删除');
                this.findServeList();
              }
            });
          }
        }
      ]
    }
  ];

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: ServeServiceCurdService) {}

  ngOnInit(): void {
    this.findServeList();
  }

  search(event: any): void {
    const name = `~=${event.name}` + '';
    this.findServeList(name);
  }

  reset(event: any): void {
    this.findServeList();
  }

  add(): void {
    this.modal.createStatic(ServeServiceCurdEditComponent, { record: { flag: false } }).subscribe(() => this.findServeList());
  }

  findServeList(name?: any): void {
    this.service.findList(name).subscribe((res: any) => {
      this.serve = res.data.items;
      this.serve.forEach((element: any) => {
        element.thumbnailPath = `${environment.SERVER_URL}/${element.thumbnailPath}`;
        element.imgList = element.imgList.map((item: any) => `${environment.SERVER_URL}/${item}`);
      });
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
        this.findServeList();
      }
    });
  }

  handleContextmenu: STContextmenuFn = (options): STContextmenuItem[] => {
    return [
      {
        text: '查看',
        fn: () => this.modal.createStatic(ServeServiceCurdViewComponent, { record: options.data }).subscribe(() => console.log('查看'))
      },

      {
        text: '编辑',
        fn: () =>
          this.modal
            .createStatic(ServeServiceCurdEditComponent, { record: { ...options.data, flag: true } })
            .subscribe(() => this.findServeList())
      },

      {
        text: '删除',
        fn: () => this.deleteClick(options.data)
      }
    ];
  };
}
