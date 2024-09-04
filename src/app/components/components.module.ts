import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CardProductComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule, 
  ],
  exports: [
    CarouselComponent,
    CardProductComponent,
    CardListComponent,
  ]
})
export class ComponentsModule { }
