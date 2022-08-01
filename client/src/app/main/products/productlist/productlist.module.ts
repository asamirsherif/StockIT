import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ProductlistComponent ]
})
export class CreateproductModule {}