import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
//import { pdf } from 'cordova-pdf-generator/www/pdf'
@Component({
  selector: 'app-wing-wise-report',
  templateUrl: './wing-wise-report.component.html',
  styleUrls: ['./wing-wise-report.component.css'],
  providers:[FileOpener,File]
})
export class WingWiseReportComponent implements OnInit {
 
  constructor(public reportService:ReportService,private file: File,
            private fileOpener: FileOpener) { }
  wingWiseReportFlag=false;
  wingFlatWiseReportFlag=false;
  wingWiseData={};
  wingWiseQuantity={};
  wingFlatWiseData={};
  products=[];
  wings=[];
  productIdName={};
  finalWingWiseReport=[];
  subscriptions;

  ngOnInit() {
      this.reportService.getAllSubscriptions().subscribe((subscriptions)=>{
      this.subscriptions=subscriptions;
      subscriptions.forEach((i,index)=>{
        var key;
        var ar = [];
        console.log(i.wing)
        if(this.wingWiseData[i.wing]==undefined){                   
            this.wingWiseData[i.wing]=[];        
        }
        this.wingWiseData[i.wing].push(i);
      })

      for(let key in this.wingWiseData){ 
        var ar = this.wingWiseData[key].map((a)=>{
          if(this.products.indexOf(a['productId'])==-1){
            this.products.push(a['productId'])
            this.productIdName[a['productId']]=a['productName']
          }    
          return {[a['productId']]:a['quantity']}
        })
        this.wingWiseQuantity[key] = ar;         
      }
      
      for(let wing in this.wingWiseQuantity){
        this.finalWingWiseReport.push({'wing':wing})
        this.wings.push(wing);
        for(let i=0;i<this.products.length;i++){
          let q=0;
          for(let j=0;j<this.wingWiseQuantity[wing].length;j++){
            if(this.wingWiseQuantity[wing][j][this.products[i]]){
              q=q+this.wingWiseQuantity[wing][j][this.products[i]];                            
            }
          }
          this.finalWingWiseReport[this.finalWingWiseReport.length-1][this.products[i]]=q;
        }
      }
      console.log("this.wingWiseData",this.wingWiseData)
      console.log("this.wingWiseQuantity",this.wingWiseQuantity)
      console.log("subscriptions",this.subscriptions)
    })
  }
  getProductNameById(id){
    this.reportService.getProductDetailsById(id).subscribe((res)=>{
      return res;
    })
  }
  exportPdf() {
    //this.presentLoading('Creating PDF file...');
    const div = document.getElementById("printable-area");    
    const options = { background: "white", height: div.clientHeight, width: div.clientWidth };
    domtoimage.toPng(div).then((dataUrl)=> {
      //Initialize JSPDF
      alert(dataUrl)
      var doc = new jsPDF("p","mm","a4");
      //Add image Url to PDF
      doc.addImage(dataUrl, 'PNG', 20, 20);
  
      let pdfOutput = doc.output();
      
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
    })
    .catch(function (error) {
     // this.loading.dismiss();
      console.error('oops, something went wrong!', error);
    });
  }
}