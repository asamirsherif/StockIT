import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreateproductComponent } from './createproduct.component';


const routes = [
  {
    path: '',
    component: CreateproductComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CreateproductComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [CreateproductComponent ]
})
export class CreateproductModule {}