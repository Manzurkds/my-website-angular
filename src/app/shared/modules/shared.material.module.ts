import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatChipsModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, 
            MatCheckboxModule,
            MatCardModule,
            MatChipsModule],
  exports: [MatButtonModule, 
            MatCheckboxModule,
            MatCardModule,
            MatChipsModule],
})
export class SharedMaterialModule { }