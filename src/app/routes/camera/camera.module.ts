import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { CameraRoutingModule } from './camera-routing.module';
import { CameraCurdComponent } from './curd/curd.component';
import { CameraCurdEditComponent } from './curd/edit/edit.component';
import { CameraCurdViewComponent } from './curd/view/view.component';

const COMPONENTS: Array<Type<void>> = [CameraCurdComponent, CameraCurdEditComponent, CameraCurdViewComponent];

@NgModule({
  imports: [SharedModule, CameraRoutingModule],
  declarations: COMPONENTS
})
export class CameraModule {}
