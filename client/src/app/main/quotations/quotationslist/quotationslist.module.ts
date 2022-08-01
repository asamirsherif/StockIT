import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { QuotationslistComponent } from './Quotationslist.component';


const routes = [
  {
    path: '',
    component:QuotationslistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [QuotationslistComponent],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [QuotationslistComponent]
})
export class QuotationslistModule {}