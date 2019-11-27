import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidenavOpen$ = this.sidenavService.open$;
  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
  }

  // 2個output，當sideNav被打開或關閉就會觸發
  opened() {
    console.log('芝麻開門');
  }

  closed() {
    console.log('芝麻關門');
  }

  openSidenav() {
    console.log('打開side');
    this.sidenavService.openSide();
  }

  closeSidenav() {
    this.sidenavService.closeSide();
  }
}
