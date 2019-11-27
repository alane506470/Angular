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
  constructor(private mediaObserver: MediaObserver) {
    // this.mediaObserver.asObservable().pipe(
    //   map(() => this.mediaObserver.isActive(this.mobileBreakpoint))
    // ).subscribe(isMobile => {
    //   if (isMobile) {
    //     this._openSubjecgt.next(false);
    //   } else {
    //     this._openSubjecgt.next(true);
    //   }
    // });
   }

  open$ = this._openSubjecgt.asObservable();

  openSide() {
    this._openSubjecgt.next(true);
  }

  closeSide() {
    this._openSubjecgt.next(false);
  }
}
