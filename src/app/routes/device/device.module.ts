import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { DeviceCurdComponent } from './curd/curd.component';
import { DeviceCurdEditComponent } from './curd/edit/edit.component';
import { DeviceCurdViewComponent } from './curd/view/view.component';
import { DeviceRoutingModule } from './device-routing.module';

const COMPONENTS: Array<Type<void>> = [DeviceCurdComponent, DeviceCurdEditComponent, DeviceCurdViewComponent];

@NgModule({
  imports: [SharedModule, DeviceRoutingModule],
  declarations: COMPONENTS
})
export class DeviceModule {}
