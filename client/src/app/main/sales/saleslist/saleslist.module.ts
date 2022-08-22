import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SaleslistComponent } from './Saleslist.component';


const routes = [
  {
    path: '',
    component: SaleslistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ SaleslistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [ SaleslistComponent ]
})
export class SaleslistModule {}