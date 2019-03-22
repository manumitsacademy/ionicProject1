import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-addressscreen',
  templateUrl: './addressscreen.component.html',
  styleUrls: ['./addressscreen.component.scss'],
})
export class AddressscreenComponent implements OnInit {

  constructor(public router:Router,public userService:UserService) { }
  flatNumber;
  wing;
  societyName;
  area;
  city;
  userDetails={};

  ngOnInit() {}
  gotoHomePage(){
    this.userDetails['name']=window.localStorage.getItem('name')
    this.userDetails['emailid']=window.localStorage.getItem('emailid');
    this.userDetails['mobilenumber']=window.localStorage.getItem('mobilenumber');
    this.userDetails['flatNumber']=this.flatNumber;
    this.userDetails['wing']=this.wing;
    this.userDetails['societyName']=this.societyName;
    this.userDetails['area']=this.area;
    this.userDetails['city']=this.city;
    this.userService.addUser(this.userDetails).subscribe((res)=>{
      window.localStorage.setItem('wing',this.wing);
      window.localStorage.setItem('flatNumber',this.flatNumber);
      console.log(res);      
      this.router.navigate(['/home']);
    });
  }
}
