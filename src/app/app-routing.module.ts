import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CardListComponent } from './components/card-list/card-list.component';

const routes: Routes = [
  { path: '', component: CardProductComponent },
  { path: 'list', component: CardListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
