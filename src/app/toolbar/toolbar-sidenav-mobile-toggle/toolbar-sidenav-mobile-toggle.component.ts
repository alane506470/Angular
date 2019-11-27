import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar-sidenav-mobile-toggle',
  templateUrl: './toolbar-sidenav-mobile-toggle.component.html',
  styleUrls: ['./toolbar-sidenav-mobile-toggle.component.scss']
})
export class ToolbarSidenavMobileToggleComponent implements OnInit {

  @Output() mobileOpenSidenav = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  openSidenav() {
    this.mobileOpenSidenav.emit();
  }
}
