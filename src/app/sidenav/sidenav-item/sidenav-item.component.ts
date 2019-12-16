import { Component, OnInit, Input } from '@angular/core';
import { SidenavItem } from '../sidenav-item.interface';
import isFunction from 'lodash-es/isFunction';
import { Observable } from 'rxjs';
import { SidenavService } from '../sidenav.service';
import { map } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  animations: [
    trigger('dropdownOpen', [
      state('false', style({
        height: 0
      })),
      state('true', style({
        height: '*'
      })),
      transition('false <=> true', animate('300ms cubic-bezier(.35, 0, .25, 1)'))
    ])
  ]
})
export class SidenavItemComponent implements OnInit {

  @Input('item') item: SidenavItem;

  @Input('level') level: number;

  dropdownOpen$: Observable<boolean>;
  constructor(private sidenavService: SidenavService, private router: Router) {
    this.dropdownOpen$ = this.sidenavService.currentlyOpen$.pipe(
      map(currentlyOpen => this.item.subItems && this.item.subItems.length > 0 && currentlyOpen.indexOf(this.item) > -1)
    );

  }

  ngOnInit() {
  }

  handleClick() {
    if (this.item.subItems && this.item.subItems.length > 0) {
      this.sidenavService.toggleItemOpen(this.item);
    } else if (typeof this.item.routeOrFunction === 'string' || this.item.routeOrFunction instanceof String) {
      this.router.navigate([this.item.routeOrFunction]);
    } else if (typeof this.item.routeOrFunction === 'function' || this.item.routeOrFunction instanceof Function) {
      this.item.routeOrFunction();
    } else {
      throw Error('Could not determine what to do, Sidenav-Item has no routeOrFunction set AND does not contain any subItems');
    }
  }

  isFunction(routeOrFunction: string[] | Function) {
    return isFunction(routeOrFunction);
  }

  // 取標題的前面2個字
  getTextIcon(item: SidenavItem) {
    let result = '';

    if (item) {
      const name = item.name.split(' ');

      if (name.length > 0) {
        result += name[0].charAt(0).toUpperCase();
      }

      if (name.length > 1) {
        result += name[1].charAt(0).toLowerCase();
      }

      if (name.length === 1) {
        result += name[0].charAt(1).toLowerCase();
      }
    }

    return result;
  }

}
