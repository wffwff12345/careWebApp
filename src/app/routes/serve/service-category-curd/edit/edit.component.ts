import { Component, OnInit, ViewChild } from '@angular/core';
import { SFSchema, SFUISchema, SFComponent } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ServeCategoryCurdService } from 'src/app/services';
@Component({
  selector: 'app-serve-service-category-curd-edit',
  templateUrl: './edit.component.html'
})
export class ServeServiceCategoryCurdEditComponent implements OnInit {
  record: any = {};
  array: string[] = [];
  @ViewChild('sf', { static: false }) sf!: SFComponent;
  schema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '服务类别编号',
        ui: {
          visibleIf: { shown: [true] },
          showRequired: true,
          validator: val => (this.array.includes(val) && this.record.no !== val ? [{ keyword: 'not', message: '服务类别编号重复' }] : [])
        }
      },
      name: { type: 'string', title: '服务类别名称' }
    },
    required: ['name']
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 150,
      grid: { span: 12 }
    },
    $href: {
      widget: 'string'
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 }
    }
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    private service: ServeCategoryCurdService
  ) {}

  ngOnInit(): void {
    this.findCategoryList();
  }

  save(value: any): void {
    delete value.flag;
    delete value._rowClassName;
    if (this.record.id) {
      this.service.update(value, this.record.id).subscribe((res: any) => {
        this.sucess(res);
      });
    } else {
      this.service.save(value).subscribe((res: any) => {
        this.sucess(res);
      });
    }
  }

  sucess(res: any) {
    if ('0' == res.error) {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    }
  }

  findCategoryList(): void {
    this.service.findList().subscribe((res: any) => {
      this.array = res.data.items.map((item: any) => item.no);
      this.sf.refreshSchema();
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
