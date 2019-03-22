import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { SubscriptionService } from '../subscription.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  productCount=0;
  subscribedProducts;
  constructor(public router:Router,public productService:ProductService,public http:HttpClient,
              public sS:SubscriptionService){    
  }
  addProduct(){
    this.router.navigate(['/addProduct'])
  }
  pauseDelivery(){
    this.router.navigate(['/pauseDelivery'])
  }
  ngOnInit(){
    console.log("Homepage");
    this.sS.subscriptionEvent.subscribe(()=>{
      this.getSubscriptions().subscribe((res)=>{console.log("event res",res)})
    })
    this.sS.subscriptionEvent.emit();
  }
  ngOnDestroy(){
    console.log("HIHIH destroy")
  }
  getSubscriptions():Observable<any>{
    return this.sS.getAllSubscriptions(window.localStorage.getItem('mobilenumber'))
    .pipe(map((res)=>{
      var products = Object.keys(res).map((k)=>{return res[k]})  
      console.log("length",products.length);
      return res;
    }));
  }
}
