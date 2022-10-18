import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { NgxPaginationModule } from 'ngx-pagination';
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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [CategoryComponent]
})
export class CategoryModule {}