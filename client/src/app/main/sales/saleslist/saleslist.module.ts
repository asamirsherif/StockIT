import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { SaleslistComponent } from './Saleslist.component';


const routes = [
  {
    path: '',
    component: SaleslistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ SaleslistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ SaleslistComponent ]
})
export class SaleslistModule {}