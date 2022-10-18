import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { UserlistComponent } from './Userlist.component';


const routes = [
  {
    path: '',
    component:UserlistComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [UserlistComponent],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule,NgxPaginationModule],
  exports: [UserlistComponent ]
})
export class UserlistModule {}