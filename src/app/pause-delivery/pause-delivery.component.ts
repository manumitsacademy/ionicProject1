import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-pause-delivery',
  templateUrl: './pause-delivery.component.html',
  styleUrls: ['./pause-delivery.component.scss'],
})
export class PauseDeliveryComponent implements OnInit {

  constructor(public fb:FormBuilder,public sS:SubscriptionService) { }
  pauseDeliveryForm:FormGroup;
  ngOnInit() {
    this.pauseDeliveryForm = this.fb.group({
      mobileNumber:[window.localStorage.getItem('mobilenumber')],
      startDate:[],
      endDate:[]
    })
  }
  pauseDelvery(){
    console.log(new Date(this.pauseDeliveryForm.controls['startDate'].value).getTime());
    this.sS.pauseDelivery(this.pauseDeliveryForm.value).subscribe((res)=>{
      console.log(res)
    })
  }
}
