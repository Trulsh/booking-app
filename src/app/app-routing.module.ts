import { NoResultsComponent } from './features/search/no-results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './features/search/search.component';
import { LoginComponent } from './features/login/login.component';
import { CartComponent } from './features/cart/cart.component';
import { AuthGuard } from './core/service/auth.guard';


const routes: Routes = [
  //{ path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'search', loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule ) , canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule ) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule ), canActivate:[AuthGuard] },
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
