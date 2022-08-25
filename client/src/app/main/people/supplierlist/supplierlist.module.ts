import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { SupplierlistComponent } from './Supplierlist.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes = [
  {
    path: '',
    component:SupplierlistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [SupplierlistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,CorePipesModule,NgxPaginationModule],
  exports: [SupplierlistComponent ]
})
export class SupplierlistModule {}