import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreatesalesComponent } from './Createsales.component';

import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';

const routes = [
  {
    path: '',
    component:CreatesalesComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ CreatesalesComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,CoreTouchspinModule],
  exports: [ CreatesalesComponent ]
})
export class CreatesalesModule {}