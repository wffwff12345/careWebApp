import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { ServeRoutingModule } from './serve-routing.module';
import { ServeServiceCategoryCurdEditComponent } from './service-category-curd/edit/edit.component';
import { ServeServiceCategoryCurdComponent } from './service-category-curd/service-category-curd.component';
import { ServeServiceCategoryCurdViewComponent } from './service-category-curd/view/view.component';
import { ServeServiceCurdEditComponent } from './service-curd/edit/edit.component';
import { ServeServiceCurdComponent } from './service-curd/service-curd.component';
import { ServeServiceCurdViewComponent } from './service-curd/view/view.component';

const COMPONENTS: Array<Type<void>> = [
  ServeServiceCurdComponent,
  ServeServiceCurdEditComponent,
  ServeServiceCurdViewComponent,
  ServeServiceCategoryCurdComponent,
  ServeServiceCategoryCurdEditComponent,
  ServeServiceCategoryCurdViewComponent
];

@NgModule({
  imports: [SharedModule, ServeRoutingModule, NzUploadModule],
  declarations: COMPONENTS
})
export class ServeModule {}
