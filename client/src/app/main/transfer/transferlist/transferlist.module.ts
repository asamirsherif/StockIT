import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [TransferlistComponent ]
})
export class TransferlistModule {}