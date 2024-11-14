import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from './cards/card-list/card-list.component'; 
import { HttpClientModule } from '@angular/common/http';
import { CardProductService } from '../services/card.product.service'
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardProductPromotionComponent } from './cards/card-product-promotion/card-product-promotion.component';
import { CardListPromotionComponent } from './cards/card-list-promotion/card-list-promotion.component';
import { FilterButtonComponent } from './filter-buttons/filter-buttons.component';
import { PageProductFilteredComponent } from './page-product-filtered/page-product-filtered.component';


@NgModule({
  declarations: [
    CardListComponent,
    HomePageComponent,
    CardProductPromotionComponent,
    CardListPromotionComponent,
    FilterButtonComponent,
    PageProductFilteredComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
],
  exports: [
    CardListComponent,
    HomePageComponent,
    CardProductPromotionComponent,
    FilterButtonComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  providers: [
    CardProductService,
  ]
})
export class ComponentsModule { }