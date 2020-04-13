import { Component, OnInit } from '@angular/core';
import { userRepo } from './search-repos.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {

  userRepo: userRepo;
  keyword: string;
  userPrompt: string;

  constructor(private http: HttpClient) { }

  searchRepos(){
    setTimeout(() => {
      this.userPrompt = "Be patient while we get you the repositories..."
    }, 200);
    this.http.get<userRepo>('https://api.github.com/search/repositories?q=' + this.keyword + '').toPromise().then((data) => {
      console.log(data);
      this.userRepo = data;
    })
    setTimeout(()=>{
      this.userPrompt = '';
    }, 3000);
  }

  ngOnInit(): void {
  }

}
