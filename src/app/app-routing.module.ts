import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchReposComponent } from './components/search-repos/search-repos.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


const routes: Routes = [
  {path: 'search-users', component: SearchUsersComponent},
  {path: 'search-repos', component: SearchReposComponent},
  {path: 'home', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
