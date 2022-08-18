import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreateadjustmentComponent } from './createadjustment.component';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';

const routes = [
  {
    path: '',
    component: CreateadjustmentComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CreateadjustmentComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,CoreTouchspinModule],
  exports: [CreateadjustmentComponent ]
})
export class CreateadjustmentModule {}