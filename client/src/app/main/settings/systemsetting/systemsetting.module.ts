import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [SystemsettingComponent]
})
export class SystemsettingModule {}