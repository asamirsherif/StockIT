import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreatereturnComponent } from './Createreturn.component';


const routes = [
  {
    path: '',
    component: CreatereturnComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ CreatereturnComponent],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ CreatereturnComponent ]
})
export class CreatereturnModule {}