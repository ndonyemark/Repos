import { Component, OnInit } from '@angular/core';
import { userRepo } from './search-repos.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
