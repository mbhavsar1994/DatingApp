import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
busyRequestCount = 0;

  constructor(private ngxSpinnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.ngxSpinnerService.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgba(255,255,255)',
      color: '#fec54f'
    })
  }

  idle() {
    this.busyRequestCount--;
    if(this.busyRequestCount<=0){
      this.busyRequestCount = 0;
      this.ngxSpinnerService.hide();
    }
  }
}
