import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { SalesComponent } from './sales.component';


const routes = [
  {
    path: '',
    component: SalesComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [SalesComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [SalesComponent ]
})
export class SalesModule {}