import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { SearchReposComponent } from './components/search-repos/search-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    SearchUsersComponent,
    SearchReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
