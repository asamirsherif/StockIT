import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreateadjustmentComponent } from './createadjustment.component';


const routes = [
  {
    path: '',
    component: CreateadjustmentComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CreateadjustmentComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [CreateadjustmentComponent ]
})
export class CreateadjustmentModule {}