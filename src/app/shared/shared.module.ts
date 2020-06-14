import { NgModule } from '@angular/core';
import { IntToArrayPipe } from './pipes/int-to-array.pipe';
import { SeparatorComponent } from './components/separator/separator.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    IntToArrayPipe,
    SeparatorComponent,
    CardComponent,
  ],
  exports: [
    IntToArrayPipe,
    SeparatorComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule{}
