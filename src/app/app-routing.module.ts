import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsResolvers } from './class-subscriptions/subscription-resolvers';
import { HomeComponent } from './components/home/home.component';
import { ClassSchedulesResolvers } from './exam-schedule/exams-schedule-resolver';
import { FindProgramTypesResolvers, ProgramTypesResolvers } from './exam-types/program-types-resolver';
import { FindClassResolvers } from './setup/class-resolvers';

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
    path: 'programs',
    loadChildren: () => import('./programs/programs.module').then(x => x.ProgramsModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./classes/classes.module').then(p => p.ClassesModule)
  },
  {
    path: 'subscriptions',
    loadChildren: () => import('./class-subscriptions/class-subscriptions.module').then(x => x.ClassSubscriptionsModule)
  },

  {
    path: 'class-results/:id',
    resolve: {
      class: FindClassResolvers,
      types: ProgramTypesResolvers
    },
    loadChildren: () => import('./class-results/class-results.module').then(x => x.ClassResultsModule)
  },
  {
    path: 'results-entry',
    loadChildren: () => import('./results-entry/results-entry.module').then(x => x.ResultsEntryModule)
  },
  {
    path: 'schedule/:id/:tid',
    resolve: {
      class: FindClassResolvers,
      types: FindProgramTypesResolvers,
      schedules: ClassSchedulesResolvers
    },
    loadChildren: () => import('./exam-schedule/exam-schedule.module').then(x => x.ExamScheduleModule)
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
