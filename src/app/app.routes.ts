import { Routes } from '@angular/router';
import { FullComponent } from './core/components/full-component/full-component';
import { BlankComponent } from './core/components/blank-component/blank-component';
import { LoginComponent } from './features/authentication/login-component/login-component';
import { HomeComponent } from './features/application/home/home-component';
import { AuthGuard } from './core/guards/auth-guard-guard';

export const routes: Routes = [
  // {
  //   path: "**",
  //   redirectTo: "login",
  //   pathMatch: "full"
  // },
  {
    canActivate: [AuthGuard],
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
];
