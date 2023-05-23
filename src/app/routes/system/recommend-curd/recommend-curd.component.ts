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
import { SystemRecommendService } from 'src/app/services';

import { SystemRecommendCurdEditComponent } from './edit/edit.component';
import { SystemRecommendCurdViewComponent } from './view/view.component';

@Component({
  selector: 'app-system-recommend-curd',
  templateUrl: './recommend-curd.component.html'
})
export class SystemRecommendCurdComponent implements OnInit {
  recommend: any;
  delete: any = [];
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
    { title: '推荐ID', index: 'id', type: 'checkbox' },
    { title: '图片ID', index: 'thumbnailId' },
    { title: '图片', type: 'img', index: 'thumbnailPath', width: 150 },
    { title: 'URL', index: 'url' },
    { title: '标题', index: 'title' },
    { title: '描述', index: 'description' },
    {
      title: '操作',
      buttons: [
        {
          text: '查看',
          type: 'modal',
          modal: { component: SystemRecommendCurdViewComponent }
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: SystemRecommendCurdEditComponent,
            params(record): any {
              return (record.flag = true);
            }
          },
          click: (_record, modal) => this.findRecommendList()
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

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: SystemRecommendService) {}

  ngOnInit(): void {
    this.findRecommendList();
  }

  search(event: any): void {
    const title = `~=${event.title}` + '';
    this.findRecommendList(title);
  }

  reset(event: any): void {
    this.findRecommendList();
  }

  add(): void {
    this.modal.createStatic(SystemRecommendCurdEditComponent, { record: { flag: false } }).subscribe(() => this.findRecommendList());
  }

  findRecommendList(name?: any): void {
    this.service.findList(name).subscribe((res: any) => {
      this.recommend = res.data.items;
      this.recommend.forEach((element: any) => {
        element.thumbnailPath = `${environment.SERVER_URL}/${element.thumbnailPath}`;
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
        this.findRecommendList();
      }
    });
  }

  deleteRow(event: any): void {
    this.service.delete(event.id).subscribe((res: any) => {
      if (res.error == '0') {
        this.message.success('成功删除');
        this.findRecommendList();
      }
    });
  }

  handleContextmenu: STContextmenuFn = (options): STContextmenuItem[] => {
    return [
      {
        text: '查看',
        fn: () => this.modal.createStatic(SystemRecommendCurdViewComponent, { record: options.data }).subscribe(() => console.log('查看'))
      },
      {
        text: '编辑',
        fn: () =>
          this.modal
            .createStatic(SystemRecommendCurdEditComponent, { record: { ...options.data, flag: true } })
            .subscribe(() => this.findRecommendList())
      },
      {
        text: '删除',
        fn: item => this.deleteRow(options.data)
      }
    ];
  };
}
