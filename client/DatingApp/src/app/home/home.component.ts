import { take } from 'rxjs/operators';
import { AccountService } from './../_services/account.service';
import { UserParams } from './../_models/userParams';
import { MemberService } from 'src/app/_services/member.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;
  userParams: UserParams;
  user: User;

  constructor(private http: HttpClient, private memberService: MemberService, private accountService:
    AccountService) { }

  ngOnInit(): void {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      if (user)
      this.user = user;
    })
    this.userParams = new UserParams(this.user);

    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this.memberService.getMembers(this.userParams).subscribe(users => this.users = users);
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
