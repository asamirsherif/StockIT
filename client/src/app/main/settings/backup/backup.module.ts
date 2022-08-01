import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule],
  exports: [BackupComponent]
})
export class BackupModule {}