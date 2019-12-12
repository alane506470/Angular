import { Component, OnInit, Input } from '@angular/core';
import { SidenavItem } from '../sidenav-item.interface';
import isFunction from 'lodash-es/isFunction';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {

  @Input('item') item : SidenavItem;

  @Input('level') level:number;
  constructor() { }

  ngOnInit() {
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
