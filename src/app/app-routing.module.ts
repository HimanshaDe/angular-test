import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter', // Redirect to counter for testing
    pathMatch: 'full',
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/counter.component').then((m) => m.CounterComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
