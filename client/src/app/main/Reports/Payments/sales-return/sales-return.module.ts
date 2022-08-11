import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { SalesReturnComponent } from './sales-return.component';


const routes = [
  {
    path: '',
    component: SalesReturnComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [SalesReturnComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [SalesReturnComponent]
})
export class SalesReturnModule {}