import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CameraCurdComponent } from './curd/curd.component';

const routes: Routes = [{ path: 'curd', component: CameraCurdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraRoutingModule {}
