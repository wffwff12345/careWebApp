import { Component, OnInit, ViewChild } from '@angular/core';
import { G2PieClickItem, G2PieComponent, G2PieData } from '@delon/chart/pie';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OrderService } from 'src/app/services';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  order = [];
  @ViewChild('pie', { static: false }) readonly pie!: G2PieComponent;
  salesPieData: G2PieData[] = [];
  total = '';

  constructor(private msg: NzMessageService, private service: OrderService) {}

  ngOnInit(): void {
    this.findOrderList();
  }

  findOrderList(): void {
    this.service.findOrderList().subscribe((res: any) => {
      this.order = res.data;
      this.refresh();
    });
  }

  refresh(): void {
    const rv = (status: string) => {
      const number = this.order.filter((element: any) => status === element.status).map((x: any) => x.total)[0];
      return number;
    };

    this.salesPieData = [
      {
        x: '待付款',
        y: rv('1')
      },
      {
        x: '待接单',
        y: rv('2')
      },
      {
        x: '待服务',
        y: rv('3')
      },
      {
        x: '服务中',
        y: rv('4')
      },
      {
        x: '已完成',
        y: rv('5')
      }
    ];
    this.total = `${this.salesPieData.reduce((pre, now) => now.y + pre, 0)}`;
    if (this.pie) {
      // 等待组件渲染
      setTimeout(() => this.pie.changeData());
    }
  }

  format(val: number): string {
    return `${val}
    `;
  }

  handleClick(data: G2PieClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
