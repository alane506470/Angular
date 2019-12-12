import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidenavItem } from './sidenav-item.interface';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  items$: Observable<SidenavItem[]>;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.items$ = this.sidenavService.items$;
  }

}
