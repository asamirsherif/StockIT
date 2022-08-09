import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { PurchaseslistComponent } from './Purchaseslist.component';


const routes = [
  {
    path: '',
    component: PurchaseslistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ PurchaseslistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [ PurchaseslistComponent ]
})
export class PurchaseslistModule {}