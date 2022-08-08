import { EditbrandComponent } from './editbrand.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CoreCommonModule } from '@core/common.module';




const routes = [
  {
    path: '',
    component: EditbrandComponent,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [ EditbrandComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,FormsModule],
  exports: [EditbrandComponent]
})
export class EditBrandModule {}