import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { TransferlistComponent } from './transferlist.component';


const routes = [
  {
    path: '',
    component: TransferlistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [TransferlistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [TransferlistComponent ]
})
export class TransferlistModule {}