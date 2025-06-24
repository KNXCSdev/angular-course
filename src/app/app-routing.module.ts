import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstNavigationComponent } from './Navigation/first-navigation/first-navigation.component';
import { SecondNavigationComponent } from './Navigation/second-navigation/second-navigation.component';
import { PageNotFoundComponent } from './Navigation/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstNavigationComponent,
    children: [
      {
        path: 'child-a', // child route path
        // component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        loadChildren: () =>
          import('./app.component').then((m) => m.AppComponent),
        // component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },
  { path: 'second-component', component: SecondNavigationComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
