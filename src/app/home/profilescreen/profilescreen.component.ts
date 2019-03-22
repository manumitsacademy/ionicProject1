import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilescreen',
  templateUrl: './profilescreen.component.html',
  styleUrls: ['./profilescreen.component.scss'],
})
export class ProfilescreenComponent implements OnInit {

  constructor(public router:Router) { }
  name;
  emailid;
  ngOnInit() {}

  gotoAddressPage(){
    window.localStorage.setItem('name',this.name);
    window.localStorage.setItem('emailid',this.emailid);
    this.router.navigate(['/home/address'])
  }
  
}
