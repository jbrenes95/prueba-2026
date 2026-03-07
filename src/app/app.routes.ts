import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/user-list/user-list').then(m => m.UserList),
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./features/users/user-detail/user-detail').then(m => m.UserDetail),
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];
