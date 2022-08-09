import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [ExpenseslistComponent]
})
export class ExpenseslistModule {}