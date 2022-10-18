import { ProductdetatilsComponent } from './productdetatils.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';
import { NgxBarcodeModule } from 'ngx-barcode';






const routes = [
  {
    path: '',
    component: ProductdetatilsComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ProductdetatilsComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule ,NgxBarcodeModule
  ],
  exports: [ProductdetatilsComponent ]
})
export class ProductdetatilsModule {}