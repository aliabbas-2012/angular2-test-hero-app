import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroesComponent } from './hero/heroes.component';
import { HeroSearchComponent } from './hero/hero-search.component';
import { HeroSearchObComponent } from './hero/hero-search-ob.component';
import { DashboardComponent } from './hero/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroSearchObComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HeroDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //configuring routes
   AppRoutingModule,
   InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})


export class AppModule { }
