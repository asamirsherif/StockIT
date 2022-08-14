import { ProductupdateComponent } from './productupdate.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';



const routes = [
  {
    path: '',
    component: ProductupdateComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ProductupdateComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [ProductupdateComponent ]
})
export class ProductupdateComponentModule {}