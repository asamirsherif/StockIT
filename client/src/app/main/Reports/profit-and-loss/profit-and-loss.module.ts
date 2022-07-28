import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ProfitAndLossComponent } from './profit-and-loss.component';


const routes = [
  {
    path: '',
    component: ProfitAndLossComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ProfitAndLossComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ProfitAndLossComponent ]
})
export class ProfitAndLossModule {}