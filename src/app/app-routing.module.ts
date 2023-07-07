import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceSeasonsComponent } from './race-seasons';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'races',
    pathMatch: 'full',
  },
  {
    path: 'races',
    component: RaceSeasonsComponent,
  },
  {
    path: 'races/:input',
    loadComponent: () =>
      import('./race-season-details/race-season-details.component').then(
        (c) => c.RaceSeasonDetailsComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('./page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
