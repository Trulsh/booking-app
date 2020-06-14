import { AuthService } from './../auth.service';
import { Room, Hotel } from './../../model/hotel';
import { CartItem } from './../../model/cart-item';
import { Injectable, ɵConsole } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  items: CartItem[] = [];

  constructor(private auth: AuthService){}

   addToCart(room: Room, hotel: Hotel){
    /*this.items.push({
      hotel: hotel,
      room: room,
      creationDate: Date.now(),
    })*/
    this.items =
    [
      ...this.items,
      {
        hotel: hotel,
        room: room,
        creationDate: Date.now(),
      }
    ];
  }

  removeFromCart(cartItem: CartItem ){
    this.items = this.items.filter(item => item.creationDate !== cartItem.creationDate);
  }

  proceed(){
    window.alert(`
    Total Item: ${this.items.length}
    Order: ${this.auth.data.name}
    `);
  }
}

