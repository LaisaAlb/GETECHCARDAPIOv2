import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardProductComponent } from './cards/card-product/card-product.component';
import { CardListComponent } from './cards/card-list/card-list.component'; 
import { HttpClientModule } from '@angular/common/http';
import { CardProductService } from '../services/card.product.service'
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardProductPromotionComponent } from './cards/card-product-promotion/card-product-promotion.component';
import { CardListPromotionComponent } from './cards/card-list-promotion/card-list-promotion.component';

@NgModule({
  declarations: [
    CardProductComponent,
    CardListComponent,
    HomePageComponent,
    CardProductPromotionComponent,
        CardListPromotionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule
],
  exports: [
    CardProductComponent,
    CardListComponent,
    FilterCardsProductComponent, 
    HomePageComponent,
    CardProductPromotionComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  providers: [
    CardProductService,
  ]
})
export class ComponentsModule { }