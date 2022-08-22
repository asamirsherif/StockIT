import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListadjustmentComponent } from './listadjustment.component';


const routes = [
  {
    path: '',
    component: ListadjustmentComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ListadjustmentComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [ListadjustmentComponent ]
})
export class ListadjustmentModule {}