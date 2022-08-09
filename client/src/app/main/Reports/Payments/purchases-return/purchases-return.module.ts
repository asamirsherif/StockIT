import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [PurchasesReturnComponent ]
})
export class PurchasesReturnModule {}