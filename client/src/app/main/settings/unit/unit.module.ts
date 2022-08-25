import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [UnitComponent]
})
export class UnitModule {}