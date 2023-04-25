import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServeServiceCategoryCurdComponent } from './service-category-curd/service-category-curd.component';
import { ServeServiceCurdComponent } from './service-curd/service-curd.component';

const routes: Routes = [
  { path: 'service-curd', component: ServeServiceCurdComponent },
  { path: 'service-category-curd', component: ServeServiceCategoryCurdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServeRoutingModule {}
