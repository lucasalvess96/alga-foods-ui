import { Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/foods/foods.component').then((c) => c.FoodsComponent),
  },
];

export default routes;
