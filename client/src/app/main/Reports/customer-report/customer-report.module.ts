import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { CustomerReportComponent } from './customer-report.component';


const routes = [
  {
    path: '',
    component: CustomerReportComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CustomerReportComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [CustomerReportComponent ]
})
export class CustomerReportModule {}