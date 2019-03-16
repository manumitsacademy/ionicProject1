import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addressscreen',
  templateUrl: './addressscreen.component.html',
  styleUrls: ['./addressscreen.component.scss'],
})
export class AddressscreenComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}
  gotoHomePage(){
    this.router.navigate(['/home']);
  }
}
