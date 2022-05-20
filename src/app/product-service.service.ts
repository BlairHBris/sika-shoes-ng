import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

type ProductResponse = {
  results: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {}

  listProducts(){
    return this.http.get<ProductResponse>('assets/products.json')
  }

  getProduct(id:number){
    return this.http.get<Product>('assets/products.json')
  }

}
