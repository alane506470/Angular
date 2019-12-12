import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatSidenavModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MaterialModule } from 'src/@happy/shared/material-components.module';
import { SidenavModule } from '../sidenav/sidenav.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    RouterModule,
    MaterialModule,
    SidenavModule
  ]
})
export class LayoutModule { }
