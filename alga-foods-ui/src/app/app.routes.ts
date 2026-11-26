import { Routes } from '@angular/router';
import { canAccessGuard } from 'security-auth-ui';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'foods',
    canActivate: [canAccessGuard],
    loadChildren: () => import('./features/food/food.routing').then((m) => m.default),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./features/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
];
