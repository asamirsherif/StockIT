import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { GrouppermissionComponent } from './grouppermission.component';


const routes = [
  {
    path: '',
    component: GrouppermissionComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [GrouppermissionComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [GrouppermissionComponent]
})
export class GrouppermissionModule {}