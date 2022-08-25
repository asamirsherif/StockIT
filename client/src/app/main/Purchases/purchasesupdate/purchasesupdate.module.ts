import { PurchasesupdateComponent } from './purchasesupdate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';



const routes = [
  {
    path: '',
    component: PurchasesupdateComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ PurchasesupdateComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,CoreTouchspinModule],
  exports: [ PurchasesupdateComponent ]
})
export class PurchasesupdateModule {}