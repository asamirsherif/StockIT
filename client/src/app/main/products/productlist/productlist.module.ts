import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductlistComponent } from './productlist.component';


const routes = [
  {
    path: '',
    component: ProductlistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ProductlistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [ProductlistComponent ]
})
export class CreateproductModule {}