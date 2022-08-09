import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [SupplierlistComponent ]
})
export class SupplierlistModule {}