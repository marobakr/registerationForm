import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'visit-data', pathMatch: 'full' },
  {
    path: 'visit-data',
    loadComponent: () =>
      import('./pages/visit-data/visit-data.component').then(
        (m) => m.VisitDataComponent
      ),
  },
  {
    path: 'visitor-data',
    loadComponent: () =>
      import('./pages/visitor/visitor.component').then(
        (m) => m.VisitorComponent
      ),
  },
  {
    path: 'host-data',
    loadComponent: () =>
      import('./pages/host/host.component').then((m) => m.HostComponent),
  },

  { path: '**', redirectTo: '/visit-data', pathMatch: 'full' },
];
