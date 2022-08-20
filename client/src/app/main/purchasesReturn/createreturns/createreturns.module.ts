import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreatereturnsComponent } from './Createreturns.component';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';



const routes = [
  {
    path: '',
    component: CreatereturnsComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ CreatereturnsComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,CoreTouchspinModule],
  exports: [ CreatereturnsComponent ]
})
export class CreatereturnsModule {}