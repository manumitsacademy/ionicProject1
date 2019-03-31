import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsHomeComponent } from './reports-home/reports-home.component';
import { RouterModule } from '@angular/router';
import { WingWiseReportComponent } from './wing-wise-report/wing-wise-report.component';
import { FlatWiseReportComponent } from './flat-wise-report/flat-wise-report.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductnamePipe } from './productname.pipe';
import { IonicModule } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
@NgModule({
  declarations: [ReportsHomeComponent, WingWiseReportComponent, FlatWiseReportComponent, ProductnamePipe],
  imports: [
    CommonModule,HttpClientModule,IonicModule,
    RouterModule.forChild([
      {
        path:'',
        component:WingWiseReportComponent
      },
      {
        path:'report',
        component:ReportsHomeComponent,
        children:[
          {
            path:'',
            component:WingWiseReportComponent
          },
          {
            path:'flatWiseReport',
            component:FlatWiseReportComponent
          }
        ]
      }
      
    ])
  ],
  providers: [
    FileOpener
  ]
})
export class ReportModule { }
