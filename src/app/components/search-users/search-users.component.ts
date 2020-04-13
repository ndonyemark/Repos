import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { searchUser } from './search-users.interface';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  search: searchUser;
  keyword: string;
  prompt: string

  constructor(private http: HttpClient) { }

  searchUser(){
    setTimeout(() => {
      this.prompt = "fetching results..."
    },100);
    this.http.get<searchUser>('https://api.github.com/search/users?q='+this.keyword).toPromise().then(data => {
      console.log(data);
      this.search = data;
    })
    setTimeout(()=>{
      this.prompt = "";
    }, 2000)
  }

  ngOnInit(): void {
  }

}
