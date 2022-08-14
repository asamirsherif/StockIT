import { UpdatetransferComponent } from './updatetransfer.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';



const routes = [
  {
    path: '',
    component: UpdatetransferComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [UpdatetransferComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [UpdatetransferComponent ]
})
export class UpdatetransferModule {}