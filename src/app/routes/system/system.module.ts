import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { SystemPayCurdEditComponent } from './pay-curd/edit/edit.component';
import { SystemPayCurdComponent } from './pay-curd/pay-curd.component';
import { SystemPayCurdViewComponent } from './pay-curd/view/view.component';
import { SystemRecommendCurdEditComponent } from './recommend-curd/edit/edit.component';
import { SystemRecommendCurdComponent } from './recommend-curd/recommend-curd.component';
import { SystemRecommendCurdViewComponent } from './recommend-curd/view/view.component';
import { SystemRoutingModule } from './system-routing.module';
import { SystemUserCurdEditComponent } from './user-curd/edit/edit.component';
import { SystemUserCurdComponent } from './user-curd/user-curd.component';
import { SystemUserCurdViewComponent } from './user-curd/view/view.component';

const COMPONENTS: Array<Type<void>> = [
  SystemPayCurdComponent,
  SystemPayCurdEditComponent,
  SystemPayCurdViewComponent,
  SystemUserCurdComponent,
  SystemUserCurdEditComponent,
  SystemUserCurdViewComponent,
  SystemRecommendCurdComponent,
  SystemRecommendCurdEditComponent,
  SystemRecommendCurdViewComponent
];

@NgModule({
  imports: [SharedModule, SystemRoutingModule],
  declarations: COMPONENTS
})
export class SystemModule {}
