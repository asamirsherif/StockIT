import { QuotationupdateComponent } from './quotationupdate.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';




const routes = [
  {
    path: '',
    component:QuotationupdateComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [QuotationupdateComponent],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [QuotationupdateComponent]
})
export class QuotationupdateModule {}