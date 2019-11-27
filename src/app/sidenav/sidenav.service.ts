import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { filter, map, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  mobileBreakpoint = 'lt-md';
  // 放入偵測畫面大小，小於959 md('screen and (max-width: 959px)')
  private _openSubjecgt = new BehaviorSubject<boolean>(this.mediaObserver.isActive(this.mobileBreakpoint));
  private _modeSubject = new BehaviorSubject<'side' | 'over'>(this.mediaObserver.isActive(this.mobileBreakpoint) ? 'over' : 'side');

  open$ = this._openSubjecgt.asObservable();
  sidenavMode$ = this._modeSubject.asObservable();

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



  openSide() {
    this._openSubjecgt.next(true);
  }

  closeSide() {
    this._openSubjecgt.next(false);
  }
}
