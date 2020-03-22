import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  productArray : Array<Product> = new Array<Product>();

  private api_url = 'api/list';
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { 
    this.productArray.push({name:"name1",description:"111",price:800});
    this.productArray.push({name:"name2",description:"222",price:800});
    this.productArray.push({name:"name3",description:"333",price:800});
    this.productArray.push({name:"name4",description:"444",price:800});
  }

  getProductList(): Array<Product>{

    return this.productArray;

  }
}
