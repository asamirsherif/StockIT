import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { ProfileComponent } from './Profile.component';


const routes = [
  {
    path: '',
    component:ProfileComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [ProfileComponent]
})
export class ProfileModule {}