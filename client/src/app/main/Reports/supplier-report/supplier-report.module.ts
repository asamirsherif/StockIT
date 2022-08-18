import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { SupplierReportComponent } from './supplier-report.component';


const routes = [
  {
    path: '',
    component: SupplierReportComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [SupplierReportComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [SupplierReportComponent ]
})
export class SupplierReportModule {}