import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { newArray } from '@angular/compiler/src/util';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = new Array<Product>();
  constructor(private service:ProductListService) {

  }

  ngOnInit(): void {
    this.products = this.service.getProductList();
  }
  share(): void{
    alert(1);
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
