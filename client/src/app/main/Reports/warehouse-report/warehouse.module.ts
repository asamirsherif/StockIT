import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { WarehouseReportComponent } from './warehouse-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterModule } from 'app/layout/components/footer/footer.module';
//chart
const routes = [
  {
    path: '',
    component: WarehouseReportComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [WarehouseReportComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule, NgbModule, FooterModule],
  exports: [WarehouseReportComponent]
})
export class WarehouseReportModule {}