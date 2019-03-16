import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstscreen',
  templateUrl: './firstscreen.component.html',
  styleUrls: ['./firstscreen.component.scss'],
})
export class FirstscreenComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}
  gotoOtpPage(){
    this.router.navigate(['/home/otpscreen'])
  }
}
