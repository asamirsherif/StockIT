import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { GrouppermissionComponent } from './grouppermission.component';


const routes = [
  {
    path: '',
    component: GrouppermissionComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [GrouppermissionComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [GrouppermissionComponent]
})
export class GrouppermissionModule {}