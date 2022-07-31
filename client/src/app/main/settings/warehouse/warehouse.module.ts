import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { WarehouseComponent } from './warehouse.component';


const routes = [
  {
    path: '',
    component: WarehouseComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [WarehouseComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [WarehouseComponent]
})
export class WarehouseReportModule {}