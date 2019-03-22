import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstscreen',
  templateUrl: './firstscreen.component.html',
  styleUrls: ['./firstscreen.component.scss'],
})
export class FirstscreenComponent implements OnInit {

  constructor(public router:Router) {
    if(window.localStorage.getItem('mobilenumber')){
      this.router.navigate(['/home'])
    }
  }
  mobilenumber;
  ngOnInit() {}
  gotoOtpPage(){    
    window.localStorage.setItem('mobilenumber',this.mobilenumber)
    this.router.navigate(['/home/otpscreen'])
  }
}
