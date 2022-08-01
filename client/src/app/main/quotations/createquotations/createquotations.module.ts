import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import {CreatequotationsComponent} from './Createquotations.component';


const routes = [
  {
    path: '',
    component:CreatequotationsComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CreatequotationsComponent],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [CreatequotationsComponent]
})
export class CreatequotationsModule {}