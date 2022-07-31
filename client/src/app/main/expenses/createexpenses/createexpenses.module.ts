import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreateexpensesComponent } from './createexpenses.component';


const routes = [
  {
    path: '',
    component: CreateexpensesComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CreateexpensesComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [CreateexpensesComponent ]
})
export class CreateexpensesModule {}