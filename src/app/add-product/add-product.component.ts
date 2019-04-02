import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, NavigationExtras } from '@angular/router';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  constructor(public router:Router,public productService:ProductService, public sS:SubscriptionService) { }
  productList;  
  unSubscribedProducts;
  ngOnInit() {
    this.productService.getAllProducts().toPromise().then((res)=>{
      this.productList=res;
      console.log("Product List ",this.productList);
      return this.sS.getUserSubscribedProducts(localStorage.getItem('mobileNumber')).toPromise()
    }).then((subscribedProducts:any[])=>{
        console.log("subscribedProducts",subscribedProducts)
          this.unSubscribedProducts = this.productList.filter((product)=>{
          return  subscribedProducts.every((sproduct)=>{
                    return sproduct.productId!=product._id.$oid
                  })
        });
      })
  }
  gotoProductSubscription(product){
    console.log(product)
    var productData: NavigationExtras  = {
      queryParams: {
        "productName":product.productName,
        "productImageUrl":product.productImageUrl,
        "productPrice":product.productPrice,
        "productId":product._id.$oid
      }
    }
    this.router.navigate(['/productSubscription'],productData)
  }                         
}
