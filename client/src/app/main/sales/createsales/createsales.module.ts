import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreatesalesComponent } from './Createsales.component';


const routes = [
  {
    path: '',
    component:CreatesalesComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ CreatesalesComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ CreatesalesComponent ]
})
export class CreatesalesModule {}