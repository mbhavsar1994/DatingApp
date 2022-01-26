import { MemberService } from 'src/app/_services/member.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient, private memberService: MemberService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this.memberService.getMembers().subscribe(users => this.users = users);
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
