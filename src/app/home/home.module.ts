import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FirstscreenComponent } from './firstscreen/firstscreen.component'
import { AddressscreenComponent } from './addressscreen/addressscreen.component';
import { ProfilescreenComponent } from './profilescreen/profilescreen.component';
import { OtpscreenComponent } from './otpscreen/otpscreen.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'firstscreen',
        component: FirstscreenComponent
      },
      {
        path: 'otpscreen',
        component: OtpscreenComponent
      },
      {
        path: 'profile',
        component: ProfilescreenComponent
      }
    ])
  ],
  declarations: [HomePage,FirstscreenComponent,AddressscreenComponent,ProfilescreenComponent,
                  OtpscreenComponent]
})
export class HomePageModule {}
