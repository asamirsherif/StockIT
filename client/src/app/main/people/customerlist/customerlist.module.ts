import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerlistComponent } from './Customerlist.component';


const routes = [
  {
    path: '',
    component:CustomerlistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CustomerlistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [CustomerlistComponent ]
})
export class CustomerlistModule {}