import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityCurdComponent } from './curd/curd.component';

const routes: Routes = [{ path: 'curd', component: CommunityCurdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule {}
