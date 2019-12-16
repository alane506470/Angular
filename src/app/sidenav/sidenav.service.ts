import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { filter, map, takeUntil } from 'rxjs/operators';
import { SidenavItem } from './sidenav-item.interface';
import isEqual from 'lodash-es/isEqual';
import each from 'lodash-es/each';
import { IfStmt } from '@angular/compiler';
import { Router, NavigationEnd } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  mobileBreakpoint = 'lt-md';
  // 放入偵測畫面大小，小於959 md('screen and (max-width: 959px)')
  private _openSubjecgt = new BehaviorSubject<boolean>(this.mediaObserver.isActive(this.mobileBreakpoint));
  // sidenav mode屬性策略
  private _modeSubject = new BehaviorSubject<'side' | 'over'>(this.mediaObserver.isActive(this.mobileBreakpoint) ? 'over' : 'side');
  // Menu item
  private _items = new BehaviorSubject<SidenavItem []>([]);

  private _currentlyOpen = new BehaviorSubject<SidenavItem []>([]);


  open$ = this._openSubjecgt.asObservable();
  sidenavMode$ = this._modeSubject.asObservable();
  items$ = this._items.asObservable();
  currentlyOpen$ = this._currentlyOpen.asObservable();

  constructor(private mediaObserver: MediaObserver, private router: Router) {
    // 動態偵測畫面來改變sidenav的縮放
    this.mediaObserver.asObservable().pipe(
      map(() => this.mediaObserver.isActive(this.mobileBreakpoint))
    ).subscribe(isMobile => {
      if (isMobile) {
        this._openSubjecgt.next(false);
        this._modeSubject.next('over');
      } else {
        this._openSubjecgt.next(true);
        this._modeSubject.next('side');
      }
    });

    // this.router.events.pipe(
    //   filter<NavigationEnd>(event => event instanceof NavigationEnd)
    // ).subscribe(event => {
    //   console.log(event);
    //   this.setCurrentlyOpenByRoute(event.url);

    //   if (this.mediaObserver.isActive(this.mobileBreakpoint)) {
    //     this._openSubjecgt.next(false);
    //   }
    // });
  }

  get items() {
    return this._items.getValue();
  }

  set items(items: SidenavItem []) {
    this._items.next(items);
  }

  openSide() {
    this._openSubjecgt.next(true);
  }

  closeSide() {
    this._openSubjecgt.next(false);
  }

  addItems(items: SidenavItem[]) {
    items.forEach(item => this.addItem(item));
  }

  addItem(item: SidenavItem) {
    const findIndex = this.items.findIndex((existingIndex) => isEqual(existingIndex, item));
    if (findIndex === -1) {
      this.items = [...this.items, item];
    }
  }

  get currentlyOpen() {
    return this._currentlyOpen.getValue();
  }

  set currentlyOpen(currentlyOpen: SidenavItem[]) {
    this._currentlyOpen.next(currentlyOpen);
  }

  // // 設置現在打開的Item的結構，藉由路由
  // private setCurrentlyOpenByRoute(route: string) {
  //   const item = this.getItemByRouteRecursive(route, this.items);
  //   let currentlyOpen = [];

  //   if (item && item.parent) {
  //     currentlyOpen = this.getParents(item);
  //   } else if (item) {
  //     currentlyOpen = [item];
  //   }
  //   this.currentlyOpen = currentlyOpen;
  //   console.log(this._currentlyOpen.getValue());
  //  }

  // private getItemByRouteRecursive(route: string, collection: SidenavItem[]) {
  //   let result = collection.find(i => i.routeOrFunction === route);
  //   // 在查一次子項目，如果返回false則中斷
  //   if (!result) {
  //     each(collection, (item) => {
  //       if (item && item.subItems && item.subItems.length > 0) {
  //         const found = this.getItemByRouteRecursive(route, item.subItems);

  //         if (found) {
  //           result = found;
  //           return false;
  //         }
  //       }
  //     });
  //   }
  //   return result;
  // }

  private getParents(item: SidenavItem, items: SidenavItem[] = []) {
    items.unshift(item);

    if (item.parent) {
      return this.getParents(item.parent, items);
    } else {
      return items;
    }
  }

  toggleItemOpen(item: SidenavItem) {
    let currentlyOpen = this.currentlyOpen;

    if (this.isOpen(item)) {
      if (currentlyOpen.length > 1) {
        currentlyOpen.length = currentlyOpen.indexOf(item);
      } else {
        currentlyOpen = [];
      }
    } else {
      currentlyOpen = this.getParents(item);
    }

    this.currentlyOpen = currentlyOpen;
  }

  private isOpen(item: SidenavItem) {
    return (this.currentlyOpen.indexOf(item) > -1);
  }
}
