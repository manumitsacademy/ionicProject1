import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  userMobileNumber = window.localStorage.getItem('mobileNumber');
  constructor(public http:HttpClient) { }
  url="https://api.mlab.com/api/1/databases/sachindaily/collections/subscription";
  pauseDeliveryUrl = "https://api.mlab.com/api/1/databases/sachindaily/collections/pauseDelivery";
  apiKey="ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz"
  addSubscription(subscription){
    return this.http.post(`${this.url}?apiKey=${this.apiKey}`,subscription)
  }
  pauseDelivery(deliveryDetails){
    return this.http.post(`${this.pauseDeliveryUrl}?apiKey=${this.apiKey}`,deliveryDetails)
  }
  getAllSubscriptions(mobilenumber){
    return this.http.get(`${this.url}?apiKey=${this.apiKey}`)
  }
  subscriptionEvent = new EventEmitter();
  getUserSubscribedProducts(mobileNumber){
    return this.http.get(`${this.url}?q={"mobileNumber":"${mobileNumber}"}&apiKey=${this.apiKey}`)
  }
}
