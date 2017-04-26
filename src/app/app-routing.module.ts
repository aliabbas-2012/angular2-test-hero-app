import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HeroesComponent } from './hero/heroes.component';
import { DashboardComponent } from './hero/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail.component';

import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [

  { path: 'heroes',        component: HeroesComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'dashboard',   component: HeroesComponent },
  { path: 'detail/:id',   component: HeroDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}