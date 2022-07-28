import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [UnitComponent]
})
export class UnitModule {}