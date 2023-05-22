import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceCurdComponent } from './curd/curd.component';

const routes: Routes = [{ path: 'curd', component: DeviceCurdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule {}
