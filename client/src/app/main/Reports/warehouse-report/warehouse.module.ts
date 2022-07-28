import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { WarehouseReportComponent } from './warehouse-report.component';


const routes = [
  {
    path: '',
    component: WarehouseReportComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [WarehouseReportComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [WarehouseReportComponent]
})
export class WarehouseReportModule {}