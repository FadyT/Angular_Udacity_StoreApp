import { Injectable } from '@angular/core';
import { product } from '../models/product';
import { user } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsdataService {
  userdata : user;
  productItems : product[] = [];
  cartItems : product[] = []; 
  currentItem:number = 0;
  totalprice:number = 0;

  constructor(private httpclient:HttpClient) {
    this.userdata = {
      name:'',
      address:'',
      cardnumber:'',
    }
   }

   settotalprice(p:number){
    this.totalprice = p;
   }

   gettotalprice(){
    return this.totalprice;
   }

   getuserdata(){
    return this.userdata;
   }

   saveuserdata(u :user){
    this.userdata = u;
   }

  addtocart(p: product) {
    this.cartItems.push(p);
    this.cartItems.forEach(element => {
      console.log(element.amount +": " + element.name +  " added to the cart !" );
    });
  }

  setCurrentItem(i:number){
    this.currentItem = i-1;
  }
  
  getCurrentItem(){
    return this.productItems[this.currentItem];
  }
  getproductdatafromjsonfile():Observable<product[]>{
    return this.httpclient.get<product[]>('../assets/items_data.json');
  }
  getproducts(){

    this.getproductdatafromjsonfile().subscribe(res =>{
      for (let index = 0; index < res.length; index++) {

        const product = res[index];
        product['amount'] = 0;
        this.productItems.push(product);

      }
    });

    return this.productItems;
  }
}
