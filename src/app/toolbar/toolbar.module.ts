import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material';
import { MaterialModule } from 'src/@happy/shared/material-components.module';
import { ToolbarSidenavMobileToggleComponent } from './toolbar-sidenav-mobile-toggle/toolbar-sidenav-mobile-toggle.component';



@NgModule({
  declarations: [ToolbarComponent, ToolbarSidenavMobileToggleComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
