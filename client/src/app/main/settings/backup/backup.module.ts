import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { BackupComponent } from './backup.component';


const routes = [
  {
    path: '',
    component: BackupComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [BackupComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [BackupComponent]
})
export class BackupModule {}