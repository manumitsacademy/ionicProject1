import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-product-subscription',
  templateUrl: './product-subscription.component.html',
  styleUrls: ['./product-subscription.component.scss'],
})
export class ProductSubscriptionComponent implements OnInit {

  constructor(public aR:ActivatedRoute,public fb:FormBuilder,
              public sS:SubscriptionService,public router:Router) { }
  product;
  quantity=0;
  startDate;
  subscriptionForm=this.fb.group({
    mobileNumber:[],
    productId:[],
    productName:[],
    quantity:['',[Validators.required]],
    startDate:['',[Validators.required]],
    endDate:[],
    wing:[],
    flatNumber:[]
  })
  ngOnInit() {
    this.aR.queryParams.subscribe((res)=>{
      console.log(res);
      this.product=res;
      this.subscriptionForm.controls['productId'].setValue(res.productId);
      this.subscriptionForm.controls['productName'].setValue(res.productName);
      this.subscriptionForm.controls['mobileNumber'].setValue(window.localStorage.getItem('mobileNumber'))
      this.subscriptionForm.controls['wing'].setValue(window.localStorage.getItem('wing'));
      this.subscriptionForm.controls['flatNumber'].setValue(window.localStorage.getItem('flatNumber'));
    })
  }
  addSubscription(){
    this.sS.addSubscription(this.subscriptionForm.value).subscribe((res)=>{
      console.log(res);
      this.sS.subscriptionEvent.emit();
      alert("Product Subscribed Successfully")
      this.router.navigate(['/home']);
    })
  }

}
