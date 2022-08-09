import { ProductdetatilsComponent } from './productdetatils.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';




const routes = [
  {
    path: '',
    component: ProductdetatilsComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ProductdetatilsComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ProductdetatilsComponent ]
})
export class ProductdetatilsModule {}