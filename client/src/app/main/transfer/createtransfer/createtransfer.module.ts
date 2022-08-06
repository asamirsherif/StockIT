import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreatetransferComponent } from './createtransfer.component';


const routes = [
  {
    path: '',
    component: CreatetransferComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CreatetransferComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [CreatetransferComponent ]
})
export class CreatetransferModule {}