import { AdjustupdateComponent } from './adjustupdate.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';




const routes = [
  {
    path: '',
    component: AdjustupdateComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [AdjustupdateComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,CoreTouchspinModule],
  exports: [AdjustupdateComponent ]
})
export class AdjustupdateModule {}