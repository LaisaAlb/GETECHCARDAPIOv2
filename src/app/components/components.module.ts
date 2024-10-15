import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CardProductService } from '../services/card.product.service';

@NgModule({
  declarations: [
    CarouselComponent,
    CardProductComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
  ],
  exports: [
    CarouselComponent,
    CardProductComponent,
    CardListComponent,
  ],
  providers: [
    CardProductService
  ]
})
export class ComponentsModule { }
