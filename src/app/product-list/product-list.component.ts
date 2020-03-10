import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  products : Array<Product>
  constructor() { 

  }

  ngOnInit(): void {
    this.products = new Array<Product>(4)
    this.products[0] = new Product
    this.products[0].name = "name1"
    this.products[1] = new Product
    this.products[1].name = "n2"
    this.products[2] = new Product
    this.products[2].name = "n3"
    this.products[3] = new Product
    this.products[3].name = "n4"
  }

}
