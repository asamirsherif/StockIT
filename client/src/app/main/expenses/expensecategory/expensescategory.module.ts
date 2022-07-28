import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ExpensecategoryComponent } from './expensecategory.component';


const routes = [
  {
    path: '',
    component: ExpensecategoryComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ExpensecategoryComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ExpensecategoryComponent]
})
export class ExpensecategoryModule {}