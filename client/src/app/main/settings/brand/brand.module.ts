import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { BrandComponent } from './brand.component';


const routes = [
  {
    path: '',
    component: BrandComponent,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [BrandComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [BrandComponent]
})
export class BrandModule {}