import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material';
import { MaterialModule } from 'src/@happy/shared/material-components.module';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
