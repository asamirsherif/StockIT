import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UnitComponent } from './unit.component';


const routes = [
  {
    path: '',
    component: UnitComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [UnitComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [UnitComponent]
})
export class UnitModule {}