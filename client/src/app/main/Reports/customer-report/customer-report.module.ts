import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [CustomerReportComponent ]
})
export class CustomerReportModule {}