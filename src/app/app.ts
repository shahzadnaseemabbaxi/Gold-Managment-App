import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSidebar } from './left-sidebar/left-sidebar';
import { Main } from "./main/main";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LeftSidebar,
    Main,
    Navbar
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }else {
      this.isLeftSidebarCollapsed.set(false);
    }
  }
  ngOnInit() {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }


  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
  this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
}
}
