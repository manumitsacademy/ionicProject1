import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { SubscriptionService } from '../subscription.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[FileOpener,File]
})
export class HomePage {
  productCount=0;
  productsData={};
  subscribedProducts;
  constructor(public router:Router,public productService:ProductService,public http:HttpClient,
              public sS:SubscriptionService,public loadingCtrl: LoadingController,
              private file: File,
              private fileOpener: FileOpener){    
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
      this.getSubscriptions().subscribe((res)=>{
        this.productService.getAllProducts().subscribe((products)=>{
          console.log("products",products)
          products.map((product)=>{
            return this.productsData[product._id.$oid]={
              productName:product.productName,
              productImageUrl:product.productImageUrl,
              productPrice:product.productPrice
            };
          })
          console.log("event res",res);
          console.log("productsData",this.productsData);
          this.productCount=res.length;
          this.subscribedProducts = res;
        });
      })
    })
    this.sS.subscriptionEvent.emit();
  }
  ngOnDestroy(){
    console.log("HIHIH destroy")
  }
  getSubscriptions():Observable<any>{
    return this.sS.getUserSubscribedProducts(window.localStorage.getItem('mobileNumber'))
    .pipe(map((res)=>{
      var products = Object.keys(res).map((k)=>{return res[k]})  
      console.log("length",products.length);
      console.log("User Subscriptions",res)
      return res;
    }));
  }
  getProductPrice(productId):Observable<any>{
    return this.http.get(`https://api.mlab.com/api/1/databases/sachindaily/collections/product/${productId}?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz`)
                    .pipe(map((res)=>{
                      console.log("RESER",res)
                      return res;
                    }))
  }
  
  /*
  loading: any;
  async presentLoading(msg) {
    const loading = await this.loadingCtrl.create({
      message: msg
    });
    return await loading.present();
  }
  exportPdf() {
    //this.presentLoading('Creating PDF file...');
    const div = document.getElementById("printable-area");
    console.dir("div",div);
    const options = { background: "white", height: 1000, width: 1000 };
    domtoimage.toPng(div,options).then((dataUrl)=> {
      //Initialize JSPDF
      var doc = new jsPDF("p","mm","a4");
      //Add image Url to PDF
      doc.addImage(dataUrl, 'PNG', 20, 20, 240, 180);
  
      let pdfOutput = doc.output();
      alert(pdfOutput)
      // using ArrayBuffer will allow you to put image inside PDF
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < pdfOutput.length; i++) {
          array[i] = pdfOutput.charCodeAt(i);
      }
      this.file.writeFile(this.file.dataDirectory,"invoice11.pdf",buffer, {replace:true})
      .then((success)=> {
        alert("success"+success);
        this.fileOpener.open(this.file.dataDirectory+"invoice11.pdf","application/pdf");
      }).catch((err)=>{console.log(err)})
  
      //This is where the PDF file will stored , you can change it as you like
      // for more information please visit https://ionicframework.com/docs/native/file/
      const directory = this.file.dataDirectory ;
      alert(directory)
      const fileName = "invoice.pdf";
      let options: IWriteOptions = { replace: true };
  
      this.file.checkFile(directory, fileName).then((success)=> {
        //Writing File to Device
        this.file.writeFile(directory,fileName,buffer, options)
        .then((success)=> {
          this.loading.dismiss();
          alert("File created Succesfully" + JSON.stringify(success));
          this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));
        })
        .catch((error)=> {
          this.loading.dismiss();
          alert("Cannot Create File " +JSON.stringify(error));
        });
      })
      .catch((error)=> {
        //Writing File to Device
        this.file.writeFile(directory,fileName,buffer)
        .then((success)=> {
          this.loading.dismiss();
          console.log("File created Succesfully" + JSON.stringify(success));
          this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));
        })
        .catch((error)=> {
          this.loading.dismiss();
          alert("Cannot Create File " +JSON.stringify(error));
        });
      });
    })
    .catch(function (error) {
     // this.loading.dismiss();
      console.error('oops, something went wrong!', error);
    });
  }*/
}
