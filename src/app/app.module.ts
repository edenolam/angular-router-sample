import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'crisis-list', component:CrisisListComponent},
      {path:'heroes-list', component:HeroesListComponent},
      {path:'', redirectTo:'/heroes-list', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
