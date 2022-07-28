import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { PrductquantityComponent } from './prductquantity.component';


const routes = [
  {
    path: '',
    component: PrductquantityComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [PrductquantityComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [PrductquantityComponent]
})
export class PrductquantityModule {}