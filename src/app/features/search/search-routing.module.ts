import { NoResultsComponent } from './no-results.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: SearchComponent},
      { path: 'no-result', component: NoResultsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule{

}
