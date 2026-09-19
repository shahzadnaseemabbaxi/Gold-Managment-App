// import { CommonModule, NgClass } from '@angular/common';
// import { Component, input, output } from '@angular/core';
// import { RouterLink, RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-left-sidebar',
//   imports: [RouterModule, CommonModule],
//   templateUrl: './left-sidebar.html',
//   styleUrl: './left-sidebar.css',
// })
// export class LeftSidebar {
//   isLeftSidebarCollapsed = input.required<boolean>();
//   changeIsLeftSidebarCollapsed = output<boolean>();

//   items = [
//     {
//       RouterLink: '/dashboard',
//       icon: 'fal fa-home',
//       label: 'Dashboard',
//     },
//     {
//       RouterLink: '/customers',
//       icon: 'fal fa-users',
//       label: 'Customers',
//     },
//     {
//       RouterLink: '/expenses',
//       icon: 'fal fa-dollar-sign',
//       label: 'Expenses',
//     },
//     {
//       RouterLink: '/gold-rates',
//       icon: 'fal fa-dollar-sign',
//       label: 'Gold Rates',
//     },
//     {
//       RouterLink: '/products',
//       icon: 'fal fa-box',
//       label: 'Products',
//     },
//     {
//       RouterLink: '/purchases',
//       icon: 'fal fa-dollar-sign',
//       label: 'Purchases',
//     },
//     {
//       RouterLink: '/reports',
//       icon: 'fal fa-dollar-sign',
//       label: 'Reports',
//     },
//     {
//       RouterLink: '/sales',
//       icon: 'fal fa-dollar-sign',
//       label: 'Sales',
//     },
//     {
//       RouterLink: '/stock',
//       icon: 'fal fa-dollar-sign',
//       label: 'Stock',
//     },
//     {
//       RouterLink: '/suppliers',
//       icon: 'fal fa-dollar-sign',
//       label: 'Suppliers',
//     },
//     {
//       RouterLink: '/users-roles',
//       icon: 'fal fa-dollar-sign',
//       label: 'Users & Roles',
//     },
//     {
//       RouterLink: '/settings',
//       icon: 'fal fa-dollar-sign',
//       label: 'Settings',
//     },

//   ];
//   toggleCollapse() {
//     this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
//   }
//   closeSidenav() {
//     this.changeIsLeftSidebarCollapsed.emit(true);
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css',
})
export class LeftSidebar {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
items = [
  {
    routerLink: 'dashboard',
    icon: 'fas fa-home',
    label: 'Dashboard',
  },


  {
    routerLink: 'goldRate',
    icon: 'fas fa-coins',
    label: 'Gold Rates',
  },
    {
    routerLink: 'sales',
    icon: 'fas fa-cash-register',
    label: 'Sales',
  },
    {
    routerLink: 'customers',
    icon: 'fas fa-users',
    label: 'Customers',
  },
  {
    routerLink: 'products',
    icon: 'fas fa-box-open',
    label: 'Products',
  },

  {
    routerLink: 'reports',
    icon: 'fas fa-chart-bar',
    label: 'Reports',
  },

  {
    routerLink: 'settings',
    icon: 'fas fa-cog',
    label: 'Settings',
  },
  {
    routerLink: 'users-roles',
    icon: 'fas fa-users-cog',
    label: 'Users & Roles',
  },
  {
    routerLink: 'logout',
    icon: 'fas fa-sign-out-alt',
    label: 'Logout',
  },
];
  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
