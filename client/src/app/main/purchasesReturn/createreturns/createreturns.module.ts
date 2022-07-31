import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreatereturnsComponent } from './Createreturns.component';


const routes = [
  {
    path: '',
    component: CreatereturnsComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ CreatereturnsComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ CreatereturnsComponent ]
})
export class CreatereturnsModule {}