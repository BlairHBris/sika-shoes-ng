import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductPageComponent } from "./product-page/product-page.component";

const routes: Routes = [{
    path: "",
    component: HomePageComponent
}, {
    path: "products",
    component: ProductsPageComponent
}, {
    path: "about",
    component: AboutPageComponent
},{
  path: "products/:id",
  component: ProductPageComponent
}
,{
  path: '**', component: PageNotFoundComponent
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
