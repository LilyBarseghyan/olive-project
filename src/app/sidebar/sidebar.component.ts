import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isSidebarClosed = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isSidebarClosed$.subscribe((state) => {
      this.isSidebarClosed = state;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
