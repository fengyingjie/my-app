import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  
  private route: ActivatedRoute;
  product: Product;

  constructor() { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = Product[+params.get('productId')];
    });
  }

}
