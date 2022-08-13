import { AdjustupdateComponent } from './adjustupdate.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';




const routes = [
  {
    path: '',
    component: AdjustupdateComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [AdjustupdateComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [AdjustupdateComponent ]
})
export class AdjustupdateModule {}