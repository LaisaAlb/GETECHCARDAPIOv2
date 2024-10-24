import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CardProductService } from '../services/card.product.service'
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardProductPromotionComponent } from './card-product-promotion/card-product-promotion.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CardProductComponent,
    CardListComponent,
    HomePageComponent,
    ImageSliderComponent,
    CardProductPromotionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule
],
  exports: [
    CarouselComponent,
    CardProductComponent,
    CardListComponent,
    ImageSliderComponent,
    HomePageComponent,
    CardProductPromotionComponent
  ],
  providers: [
    CardProductService,
  ]
})
export class ComponentsModule { }