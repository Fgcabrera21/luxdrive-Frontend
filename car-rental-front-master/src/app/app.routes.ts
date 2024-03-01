import { Routes } from '@angular/router';
import {RegisterComponent} from "./auth/components/register/register.component";
import {LoginComponent} from "./auth/components/login/login.component";

export const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)},
  {path: "customer", loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule)},

];
