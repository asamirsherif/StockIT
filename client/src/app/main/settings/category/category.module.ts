import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { CategoryComponent } from './category.component';


const routes = [
  {
    path: '',
    component: CategoryComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CategoryComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [CategoryComponent]
})
export class CategoryModule {}