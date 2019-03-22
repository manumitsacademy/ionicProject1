import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductSubscriptionComponent } from './product-subscription/product-subscription.component';
import { PauseDeliveryComponent } from './pause-delivery/pause-delivery.component';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },*/
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent
  },
  {
    path:'productSubscription',
    component:ProductSubscriptionComponent
  },
  {
    path:'pauseDelivery',
    component:PauseDeliveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
