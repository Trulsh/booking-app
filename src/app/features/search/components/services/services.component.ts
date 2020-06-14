import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-services',
  template: `
    <div class="nested">
      <div *ngFor="let icon of active?.services">
        <i [class]="'icon ion-ios-'+icon" [title]="icon"></i>
      </div>
    </div>
  `,
  styles: [
  ],
})
export class ServicesComponent{

  @Input() active: Hotel;

  constructor() { }



}
