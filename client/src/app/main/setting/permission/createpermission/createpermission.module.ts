import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreatepermissionComponent } from './Createpermission.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';



const routes = [
  {
    path: '',
    component: CreatepermissionComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CreatepermissionComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule, MdbCheckboxModule],
  exports: [CreatepermissionComponent]
})
export class CreatepermissionModule {}