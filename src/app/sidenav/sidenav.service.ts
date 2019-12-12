import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { filter, map, takeUntil } from 'rxjs/operators';
import { SidenavItem } from './sidenav-item.interface';
import isEqual from 'lodash-es/isEqual';
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



  open$ = this._openSubjecgt.asObservable();
  sidenavMode$ = this._modeSubject.asObservable();
  items$ = this._items.asObservable();

  constructor(private mediaObserver: MediaObserver) {
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
}
