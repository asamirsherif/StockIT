import { SalesupdateComponent } from './salesupdate.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes = [
  {
    path: '',
    component: SalesupdateComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ SalesupdateComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [ SalesupdateComponent ]
})
export class SalesupdateModule {}