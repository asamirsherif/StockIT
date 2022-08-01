import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { SaleReportComponent } from './sale-report.component';


const routes = [
  {
    path: '',
    component: SaleReportComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [SaleReportComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [SaleReportComponent ]
})
export class SaleReportModule {}