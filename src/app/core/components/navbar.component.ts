import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="navigation" *ngIf="auth.isLogged()">
    <div class="horiz-grid">
      <div class="logo">BOOKING</div>
      <div class="horiz-grid">
        <span class="btn" routerLink="search" routerLinkActive="active">SEARCH</span>
        <span class="btn" routerLink="cart" routerLinkActive="active">
          CART ({{cart.items.length}})
        </span>
        <span class="btn" (click)="auth.logout()">LOGOUT</span>
      </div>
      <em>{{auth.data?.name}}</em>
    </div>
  </div>
  `,
  styles: [
  ],
})
export class NavbarComponent {

  constructor(
    public cart: CartService,
    public auth: AuthService
  ){}

}
