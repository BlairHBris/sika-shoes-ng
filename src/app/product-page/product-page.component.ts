import { Component } from "@angular/core";
import { Product } from "../product.model"
import { ActivatedRoute, Router } from "@angular/router";
import { ProductServiceService } from "../product-service.service";


@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent {
  product?: Product;
  target?: Product[]
  error = false;


  constructor(private router: Router, private productService: ProductServiceService){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }

  ngOnInit():void {
    this.productService.getProduct(1).subscribe(response => {
      console.log(response)
    })
  }
}
