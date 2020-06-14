import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-hotel-lists',
  template: `
    <div class="font-big">Hotel in {{text}}</div>

<div class="horiz-grid separator"
  *ngFor="let hotel of hotels"
  (click)="setActive.emit(hotel)"
  [ngClass]="{'active': hotel.id === active?.id}"
>
  <div>{{hotel.name}}</div>
  <div>{{hotel.rooms[0].price}}</div>
</div>

<div class="separator"></div>
  <div class="horiz-grid">
    <div></div>
    <em>{{hotels?.length}} results</em>
  </div>
  `,
  styles: [
  ],
})
export class HotelListsComponent{

  @Input() hotels: Hotel[];
  @Input() active: Hotel;
  @Input() text: string;
  @Output() setActive: EventEmitter<Hotel> = new EventEmitter();
  constructor() { }




}
