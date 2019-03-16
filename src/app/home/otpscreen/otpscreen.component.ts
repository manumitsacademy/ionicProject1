import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpscreen',
  templateUrl: './otpscreen.component.html',
  styleUrls: ['./otpscreen.component.scss'],
})
export class OtpscreenComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}

  gotoProfilePage(){
    this.router.navigate(['/home/profile'])
  }
}
