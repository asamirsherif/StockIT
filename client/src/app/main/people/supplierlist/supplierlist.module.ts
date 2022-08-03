import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { SupplierlistComponent } from './Supplierlist.component';


const routes = [
  {
    path: '',
    component:SupplierlistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [SupplierlistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [SupplierlistComponent ]
})
export class SupplierlistModule {}