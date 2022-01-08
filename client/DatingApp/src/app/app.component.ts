import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;
  getUserUrl = 'https://localhost:5001/api/users';


  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getUser();
  }

  getUser() {
    this.http.get(this.getUserUrl).subscribe({
          next: response => {
            this.users = response;
          },
      error: err => {
        console.log(err);
          },
        }
    )
  }
}
