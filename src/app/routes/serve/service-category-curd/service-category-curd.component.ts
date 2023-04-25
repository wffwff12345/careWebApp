import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STChange, STClickRowClassNameType } from '@delon/abc/st';
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
    { title: '服务类别ID', index: 'id', sort: true },
    { title: '服务类别编号', index: 'no', sort: true },
    { title: '服务类别名称', index: 'name' },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          icon: 'view',
          type: 'modal',
          modal: { component: ServeServiceCategoryCurdViewComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        },
        {
          text: '编辑',
          icon: 'edit',
          type: 'modal',
          modal: { component: ServeServiceCategoryCurdEditComponent },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        }
      ]
    }
  ];

  constructor(private modal: ModalHelper, private message: NzMessageService, private service: ServeCategoryCurdService) {}

  ngOnInit(): void {
    this.findCategoryList();
  }

  add(): void {
    this.modal.createStatic(ServeServiceCategoryCurdEditComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  findCategoryList(): void {
    this.service.findList().subscribe((res: any) => {
      console.log(res);
      this.category = res.data.items;
    });
  }

  _click(event: STChange): void {
    console.log(event);
  }
}
