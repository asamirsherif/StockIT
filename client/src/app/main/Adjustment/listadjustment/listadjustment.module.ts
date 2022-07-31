import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ListadjustmentComponent ]
})
export class ListadjustmentModule {}