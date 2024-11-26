import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isSidebarClosedSubject = new BehaviorSubject<boolean>(false);
  isSidebarClosed$ = this.isSidebarClosedSubject.asObservable();

  get isSidebarClosed(): boolean {
    return this.isSidebarClosedSubject.value;
  }

  toggleSidebar() {
    const newState = !this.isSidebarClosedSubject.value;
    console.log(newState);

    this.isSidebarClosedSubject.next(newState);
  }

  setSidebarState(isClosed: boolean) {
    this.isSidebarClosedSubject.next(isClosed);
  }
}
