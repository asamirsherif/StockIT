import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { PurchaseReportComponent } from './purchase-report.component';


const routes = [
  {
    path: '',
    component: PurchaseReportComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [PurchaseReportComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [PurchaseReportComponent]
})
export class PurchaseReportModule {}