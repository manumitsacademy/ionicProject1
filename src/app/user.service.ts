import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  url="https://api.mlab.com/api/1/databases/sachindaily/collections/user";
  apiKey="ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz"
  addUser(user){
    return this.http.post(`${this.url}?apiKey=${this.apiKey}`,user);
  }
  addUserAddress(){
    //return this.http.put();
  }
  getUser(){

  }
  updateUser(){

  }
  deleteUser(){

  }
}
