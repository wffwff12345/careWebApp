import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityCurdComponent } from './curd/curd.component';
import { CommunityCurdEditComponent } from './curd/edit/edit.component';
import { CommunityCurdViewComponent } from './curd/view/view.component';

const COMPONENTS: Array<Type<void>> = [CommunityCurdComponent, CommunityCurdEditComponent, CommunityCurdViewComponent];

@NgModule({
  imports: [SharedModule, CommunityRoutingModule],
  declarations: COMPONENTS
})
export class CommunityModule {}
