import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CustomerlistComponent } from './Customerlist.component';


const routes = [
  {
    path: '',
    component:CustomerlistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CustomerlistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [CustomerlistComponent ]
})
export class CustomerlistModule {}