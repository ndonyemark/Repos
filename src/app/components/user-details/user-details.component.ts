import { Component, OnInit } from '@angular/core';
import { users } from './user-details.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  api_URL = 'db1f193399ec158e6c87d40ced0a05e052978cf6';
  userInterface: users;
  username: string;
  items: users;
  
  constructor() { }

  ngOnInit(): void {
  }

}
