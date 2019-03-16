import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilescreen',
  templateUrl: './profilescreen.component.html',
  styleUrls: ['./profilescreen.component.scss'],
})
export class ProfilescreenComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}

  gotoAddressPage(){
    this.router.navigate(['/home/address'])
  }
  
}
