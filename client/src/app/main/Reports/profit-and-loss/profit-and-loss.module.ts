import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ProfitAndLossComponent } from './profit-and-loss.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterModule } from 'app/layout/components/footer/footer.module';
//  chart 
const routes = [
  {
    path: '',
    component: ProfitAndLossComponent,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ProfitAndLossComponent],
  imports: [RouterModule.forChild(routes), TranslateModule, CoreCommonModule, NgbModule, FooterModule],
  exports: [ProfitAndLossComponent]
})
export class ProfitAndLossModule { }