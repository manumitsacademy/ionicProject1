import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReportModule } from './report/report.module'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { LogoutComponent } from './logout/logout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductSubscriptionComponent } from './product-subscription/product-subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PauseDeliveryComponent } from './pause-delivery/pause-delivery.component';
@NgModule({
  declarations: [AppComponent,LogoutComponent,AddProductComponent,ProductSubscriptionComponent,
                  PauseDeliveryComponent
                ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,ReportModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileOpener
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
