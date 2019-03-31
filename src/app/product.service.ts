import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="https://api.mlab.com/api/1/databases/sachindaily/collections/product";
  apiKey="ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz"
  constructor(public http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get(`${this.url}?apiKey=${this.apiKey}`)
  }
  getProductDetailsById(id){
    return this.http.get(`${this.url}/${id}?apiKey=${this.apiKey}`)
  }
}
