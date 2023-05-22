import { Component, OnInit, ViewChild } from '@angular/core';
import { SFSchema, SFUISchema, SFComponent } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CommunityService } from 'src/app/services';
@Component({
  selector: 'app-community-curd-edit',
  templateUrl: './edit.component.html'
})
export class CommunityCurdEditComponent implements OnInit {
  record: any = {};
  array: string[] = [];
  @ViewChild('sf', { static: false }) sf!: SFComponent;
  schema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '社区编号',
        ui: {
          showRequired: true,
          validator: val => (this.array.includes(val) && this.record.no !== val ? [{ keyword: 'not', message: '社区编号重复' }] : [])
        }
      },
      name: { type: 'string', title: '社区名称' },
      parentNo: { type: 'string', title: '父社区编号', enum: [], default: '0' }
    },
    required: ['no', 'name', 'parentNo']
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
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

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient, private service: CommunityService) {}

  ngOnInit(): void {
    this.findCommunityList();
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

  findCommunityList(): void {
    this.service.findList().subscribe((res: any) => {
      const array = res.data.items
        .sort((v1: any, v2: any) => {
          if (v1.no > v2.no) return 1;
          else if (v1.no < v2.no) return -1;
          else return 0;
        })
        .map((item: any) => ({ label: `${item.no}-${item.name}`, value: item.no }));
      array.unshift({ label: '', value: '0' });
      this.schema.properties!['parentNo'].enum = array;
      this.array = res.data.items.map((item: any) => item.no);
      this.sf.refreshSchema();
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
