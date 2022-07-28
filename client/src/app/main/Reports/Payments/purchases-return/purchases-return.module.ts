import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { PurchasesReturnComponent } from './purchases-return.component';


const routes = [
  {
    path: '',
    component: PurchasesReturnComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [PurchasesReturnComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [PurchasesReturnComponent ]
})
export class PurchasesReturnModule {}