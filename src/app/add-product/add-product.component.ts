import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  constructor(public router:Router,public productService:ProductService) { }
  productList;
  ngOnInit() {
    this.productService.getAllProducts().subscribe((res)=>{
      this.productList=res;
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
