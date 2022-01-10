import { AccountService } from './_services/account.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;
  getUserUrl = 'https://localhost:5001/api/users';


  constructor(private accountService: AccountService) { }

  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user = localStorage.getItem('user');
    if (user != null) {
    const currentUser: User = JSON.parse(user);
    this.accountService.setCurrentUser(currentUser);
    }
  }

}
