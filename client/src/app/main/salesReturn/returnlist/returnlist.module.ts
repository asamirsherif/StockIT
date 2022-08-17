import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { ReturnlistComponent } from './returnlist.component';


const routes = [
  {
    path: '',
    component: ReturnlistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ ReturnlistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [ ReturnlistComponent ]
})
export class ReturnlistModule {}