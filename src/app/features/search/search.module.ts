import { SearchRoutingModule } from './search-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListsComponent } from './components/hotel-lists/hotel-lists.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { GmapComponent } from './components/gmap/gmap.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { RatesComponent } from './components/rates/rates.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ServicesComponent } from './components/services/services.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { StarsComponent } from './components/stars/stars.component';
import { NoResultsComponent } from './no-results.component';



@NgModule({
  declarations: [
    SearchComponent,
    HotelListsComponent,
    HotelFormComponent,
    GmapComponent,
    ContactFormComponent,
    RatesComponent,
    ReservationsComponent,
    ServicesComponent,
    ImageGalleryComponent,
    StarsComponent,],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
