import { GrouppermissingupdateComponent } from './grouppermissingupdate.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';



const routes = [
  {
    path: '',
    component: GrouppermissingupdateComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [GrouppermissingupdateComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [GrouppermissingupdateComponent]
})
export class GrouppermissingupdateModule {}