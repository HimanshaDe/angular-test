import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'counter', // Redirect to counter for testing
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'counter',
  //   loadComponent: () =>
  //     import('./counter/counter.component').then((m) => m.CounterComponent),
  // },
  {
    path: '',
    redirectTo: 'app', // Redirect to counter for testing
    pathMatch: 'full',
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./app.component').then((m) => m.AppComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
