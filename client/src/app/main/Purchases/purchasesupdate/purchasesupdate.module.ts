import { PurchasesupdateComponent } from './purchasesupdate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';




const routes = [
  {
    path: '',
    component: PurchasesupdateComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ PurchasesupdateComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [ PurchasesupdateComponent ]
})
export class PurchasesupdateModule {}