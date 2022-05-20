import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Component({
  selector: 'app-product-integration',
  templateUrl: './product-integration.component.html',
  styleUrls: ['./product-integration.component.css']
})
export class ProductIntegrationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
