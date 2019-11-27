import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatSidenavModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule
  ]
})
export class LayoutModule { }
