import { CardProductService } from '../../../services/card.product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-product-promotion',
  templateUrl: './card-product-promotion.component.html',
  styleUrl: './card-product-promotion.component.scss'
})
export class CardProductPromotionComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  productsOnSale: any[] = [];
  groupedProducts: any[] = [];
  quantities: { [key: number]: number } = {};
search: any;

  constructor(private cardProductService: CardProductService) {}

  ngOnInit() {   
    // Carregar produtos primeiro
    this.cardProductService.getProducts().subscribe(() => {
      // Depois que os produtos foram carregados, filtrar os produtos em promoção
      this.productsOnSale = this.cardProductService.filterProductOnSale();
      this.groupedProducts = this.groupProducts(this.productsOnSale, 3);
      this.productsOnSale.forEach((_, index) => {
        this.quantities[index] = 0; // Inicializa a quantidade como 0
      });
    });
  }

  increaseQuantity(index: number) {
    this.quantities[index]++;
  }

  decreaseQuantity(index: number) {
    if (this.quantities[index] = 1) {
      this.quantities[index]--;
    }
  }
  

  groupProducts(products: any[], groupSize: number): any[] {
    let groups = [];
    for (let i = 0; i < products.length; i += groupSize) {
      groups.push(products.slice(i, i + groupSize));
    }
    return groups;
  }

}


