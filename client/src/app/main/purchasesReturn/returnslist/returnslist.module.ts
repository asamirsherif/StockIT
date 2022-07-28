import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ReturnslistComponent } from './Returnslist.component';


const routes = [
  {
    path: '',
    component: ReturnslistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ ReturnslistComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [ ReturnslistComponent ]
})
export class ReturnslistModule {}