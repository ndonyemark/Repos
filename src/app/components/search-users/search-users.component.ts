import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { searchUser } from './search-users.interface';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
