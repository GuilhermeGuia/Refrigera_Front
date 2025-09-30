import { Routes } from '@angular/router';
import { FullComponent } from './core/components/full-component/full-component';
import { BlankComponent } from './core/components/blank-component/blank-component';
import { AuthGuardGuard } from './core/guards/auth-guard-guard';
import { LoginComponent } from './features/authentication/login-component/login-component';
import { HomeComponent } from './features/application/home/home-component';

export const routes: Routes = [
  {
    canActivate: [AuthGuardGuard],
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
