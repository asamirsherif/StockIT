import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { SystemsettingComponent } from './systemsetting.component';


const routes = [
  {
    path: '',
    component: SystemsettingComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [SystemsettingComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [SystemsettingComponent]
})
export class SystemsettingModule {}