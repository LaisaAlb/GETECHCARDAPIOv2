import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../../../services/promotion.service';
import { ProductPromotion } from '../../../interfaces/productPromotion'; 

@Component({
  selector: 'app-card-product-promotion',
  templateUrl: './card-product-promotion.component.html',
  styleUrls: ['./card-product-promotion.component.scss']
})
export class CardProductPromotionComponent implements OnInit {
  productsOnSale: ProductPromotion[] = []; 

  constructor(private promotionService: PromotionService) {}

  ngOnInit() {
    this.loadPromotions();
  }

  // Método para carregar promoções
  loadPromotions(): void {
    this.promotionService.getProductsOnSale().subscribe({
      next: (data: ProductPromotion[]) => {
        // Limitar os produtos às 4 primeiras promoções
        this.productsOnSale = data.slice(0, 3);
      },
      error: (err) => {
        console.error('Erro ao carregar promoções:', err);
      }
    });
  }
}
