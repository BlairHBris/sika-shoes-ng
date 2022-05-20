import {Component, OnInit} from "@angular/core";
import {Product} from "../product.model"
import { ProductServiceService } from "../product-service.service";
import {forkJoin, Observable} from 'rxjs'
import { HttpClient } from "@angular/common/http";


@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = []

  error = false

  private jsonUrl = 'assets/products.json'

  constructor(private http: HttpClient){
    this.getJSON().subscribe(data => {
      console.log(data)
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonUrl)
  }

  ngOnInit(): void {

  }
}
