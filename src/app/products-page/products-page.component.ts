import {Component, OnInit} from "@angular/core";
import {Product} from "../product.model"
import { ProductServiceService } from "../product-service.service";


@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {

  products: Product[] = []

  error = false

  constructor(private productService: ProductServiceService){}

  ngOnInit(): void {
    this.productService.listProducts().subscribe(response => {
      this.products = response.products
    })

  }
}