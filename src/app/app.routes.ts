import { Routes } from '@angular/router';
import { Sales } from './pages/sales/sales';
import { Purchase } from './pages/purchase/purchase';
import { Products } from './pages/products/products';
import { Stocks } from './pages/stocks/stocks';
import { GoldRate } from './pages/gold-rate/gold-rate';
import { Customers } from './pages/customers/customers';
import { Expenses } from './pages/expenses/expenses';
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
        path: "purchases", component: Purchase
    },
    {
        path: "products", component: Products
    },
    {
        path: "stocks", component: Stocks
    },
    {
        path: "goldRate", component: GoldRate
    },
    {
        path: "customers", component: Customers
    },

    {
        path: "expanses", component: Expenses
    },
    {
        path: "reports", component: Reports
    },
    {
        path: "userRoles", component: UserRoles
    },

    {
        path: "setting", component: Setting
    },
    //WildCard Routing Page not found
    {
        path: '**', component: PageNotFound
    }
];
