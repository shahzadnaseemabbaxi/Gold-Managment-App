import { Routes } from '@angular/router';
import { Sales } from './pages/sales/sales';
import { Products } from './pages/products/products';
import { GoldRate } from './pages/gold-rate/gold-rate';
import { Customers } from './pages/customers/customers';
import { Reports } from './pages/reports/reports';
import { UserRoles } from './pages/user-roles/user-roles';
import { Setting } from './pages/setting/setting';
import { Dashboard } from './pages/dashboard/dashboard';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: "dashboard", component: Dashboard
    },

    {
        path: "sales", component: Sales
    },
 
    {
        path: "products", component: Products
    },

    {
        path: "goldRate", component: GoldRate
    },
    {
        path: "customers", component: Customers
    },
    {
        path: "reports", component: Reports
    },
    {
        path: "userRoles", component: UserRoles
    },

    {
        path: "settings", component: Setting
    },
    {
        path: "users-roles", component: UserRoles
    },

    //WildCard Routing Page not found
    {
        path: '**', component: PageNotFound
    }
];
