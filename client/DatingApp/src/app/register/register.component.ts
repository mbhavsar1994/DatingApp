import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { User } from './../_models/user';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Ex. Parent to child communication
  @Input() userFromHomeComponent: any;

  // Ex. child to Parent communication (Event Emitter)
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(){

    this.accountService.register(this.model).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    });
    // Ex. Parent to child communication
    //console.log(this.userFromHomeComponent);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
