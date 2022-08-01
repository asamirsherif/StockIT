import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ExpenseslistComponent } from './expenseslist.component';


const routes = [
  {
    path: '',
    component:ExpenseslistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ExpenseslistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ExpenseslistComponent]
})
export class ExpenseslistModule {}