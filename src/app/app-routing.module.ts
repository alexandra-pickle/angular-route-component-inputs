import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceSeasonsComponent } from './race-seasons';

const routes: Routes = [
  {
    path: 'races',
    component: RaceSeasonsComponent,
    children: [
      {
        path: ':input',
        loadComponent: () =>
          import('./app-child.component').then((m) => m.default),
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('./page-not-found.component').then((m) => m.PageNotFoundComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
