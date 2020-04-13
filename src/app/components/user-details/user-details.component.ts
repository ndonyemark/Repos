import { Component, OnInit } from '@angular/core';
import { users } from './user-details.interface';
import { HttpClient } from '@angular/common/http';
import { api_Key, environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // api_URL = 'db1f193399ec158e6c87d40ced0a05e052978cf6';
  userInterface: users;
  username: string;
  items: users;

  constructor(private http: HttpClient) { }

  getUser(){
    this.http.get<users>('https://api.github.com/users/' + this.username + '?access_token=' + environment.api_Key + '').toPromise().then(response => {
      this.userInterface = response;
      this.http.get(this.userInterface.repos_url + "?access_token=" + this.api_URL).toPromise().then(data => {
        this.userInterface.repos = data;
        console.log(this.userInterface.repos);
      });
      });
  }

  ngOnInit(): void {
    this.getUser();
  }

}
