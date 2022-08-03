import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CreatepurchasesComponent } from './Createpurchases.component';


const routes = [
  {
    path: '',
    component:CreatepurchasesComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CreatepurchasesComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [CreatepurchasesComponent ]
})
export class CreatepurchasesModule {}