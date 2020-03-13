import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})

export class ProductDetailsComponent implements OnInit {

  // private route: ActivatedRoute;
   product: Product;
   pid: string;

  constructor(  private route: ActivatedRoute,
    private router: Router) {
    //this.product = product;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pid = params.get('id');
    });
  }

}
