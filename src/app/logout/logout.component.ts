import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(public router:Router) {
    
  }
  ngOnInit() {
   this.router.events.subscribe((res)=>{
    if(res instanceof NavigationStart){
      if(res.url=='/logout'){
        console.log("logout comp")
        window.localStorage.clear();
        this.router.navigate(['/home/firstscreen'])
      }
    }
   })
  }
  ngAfterViewInit(){
    window.localStorage.clear();
    this.router.navigate(['/home/firstscreen'])
  }
}
