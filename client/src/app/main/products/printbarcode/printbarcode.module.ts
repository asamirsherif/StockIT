import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { PrintbarcodeComponent } from './printbarcode.component';


const routes = [
  {
    path: '',
    component: PrintbarcodeComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [PrintbarcodeComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [PrintbarcodeComponent ]
})
export class CreateproductModule {}