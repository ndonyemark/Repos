import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchReposComponent } from './components/search-repos/search-repos.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: 'search-users', component: SearchUsersComponent},
  {path: 'search-repos', component: SearchReposComponent},
  {path: 'home', component: UserDetailsComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
