import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrandComponent } from './brand.component';




const routes = [
  {
    path: '',
    component: BrandComponent,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [BrandComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [BrandComponent]
})
export class BrandModule {}