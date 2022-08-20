import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { PurchasesComponent } from './purchases.component';


const routes = [
  {
    path: '',
    component: PurchasesComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [PurchasesComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [PurchasesComponent ]
})
export class PurchasesModule {}