import {Component} from "@angular/core";
import {Product} from "../product.model"
import {ProductServiceService} from "../product-service.service"
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent {
  product?: Product;
  error = false;

  constructor(private route: ActivatedRoute, private router: Router){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }

  ngOnInit():void {
  this.product = this.route.snapshot.paramMap.get("name")
  }
}
