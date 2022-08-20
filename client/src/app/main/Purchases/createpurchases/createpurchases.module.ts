import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreatepurchasesComponent } from './Createpurchases.component';

import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';

const routes = [
  {
    path: '',
    component:CreatepurchasesComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CreatepurchasesComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,CoreTouchspinModule],
  exports: [CreatepurchasesComponent ]
})
export class CreatepurchasesModule {}