import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-firstscreen',
  templateUrl: './firstscreen.component.html',
  styleUrls: ['./firstscreen.component.scss'],
})
export class FirstscreenComponent implements OnInit {

  constructor(public router:Router,public userService:UserService) {
    if(window.localStorage.getItem('mobilenumber')){
      this.router.navigate(['/home'])
    }
  }
  mobileNumber;
  ngOnInit() {}
  gotoOtpPage(){    
    window.localStorage.setItem('mobileNumber',this.mobileNumber);
    this.userService.getUser(this.mobileNumber).subscribe((res:any[])=>{
      console.log(res);
      if(res.length>0){
        window.localStorage.setItem('uid',res[0]._id.$oid);        
        if(res[0].emailId){
          window.localStorage.setItem('name',res[0].name);
          window.localStorage.setItem('emailid',res[0].name);
           if(res[0].flatNumber){
            window.localStorage.setItem('flatNumber',res[0].flatNumber);
            window.localStorage.setItem('wing',res[0].wing);
            window.localStorage.setItem('societyName',res[0].societyName);
            window.localStorage.setItem('area',res[0].area);
            window.localStorage.setItem('city',res[0].city);
            this.router.navigate(['/home'])
           }
           else{
            this.router.navigate(['/home/address'])
           }
        }
        else{
          this.router.navigate(['/home/profile'])
        }
      }
      else{
        this.router.navigate(['/home/otpscreen'])
      }
    })
    
  }
}
