import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { WarehouseComponent } from './warehouse.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes = [
  {
    path: '',
    component: WarehouseComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [WarehouseComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [WarehouseComponent]
})
export class WarehouseReportModule {}