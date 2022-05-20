import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  constructor(private http: HttpClient) { }
  listProducts(){
    return this.http.get('assets/products.json')
  }

  getProduct(id:number){
    return this.http.get('assets/products.json')
  }

}
