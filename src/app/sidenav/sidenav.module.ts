import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/@happy/shared/material-components.module';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';



@NgModule({
  declarations: [SidenavComponent, SidenavItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
