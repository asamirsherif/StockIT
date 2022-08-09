import { ExpenseupdateComponent } from './expenseupdate.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';




const routes = [
  {
    path: '',
    component: ExpenseupdateComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ExpenseupdateComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ExpenseupdateComponent]
})
export class ExpenseupdateModule {}