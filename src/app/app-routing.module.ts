import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsResolvers } from './class-subscriptions/subscription-resolvers';
import { HomeComponent } from './components/home/home.component';
import { StudentsListResolvers } from './results-entry/students-resolvers';
import { PageNotFoundComponent } from './shared/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      classes: SubscriptionsResolvers
    }
  },
  {
    path: 'subscriptions',
    loadChildren: () => import('./class-subscriptions/class-subscriptions.module').then(x => x.ClassSubscriptionsModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./setup/setup.module').then(p => p.SetupModule)
  },
  {
    path: 'results/:id',
    resolve: {
      students: StudentsListResolvers
    },
    loadChildren: () => import('./results-entry/results-entry.module').then(x => x.ResultsEntryModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
