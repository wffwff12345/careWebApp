import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemPayCurdComponent } from './pay-curd/pay-curd.component';
import { SystemRecommendCurdComponent } from './recommend-curd/recommend-curd.component';
import { SystemUserCurdComponent } from './user-curd/user-curd.component';

const routes: Routes = [
  { path: 'pay-curd', component: SystemPayCurdComponent },
  { path: 'user-curd', component: SystemUserCurdComponent },
  { path: 'recommend-curd', component: SystemRecommendCurdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
