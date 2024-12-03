import { ProductPromotion } from './../../../interfaces/productPromotion';
import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../../../services/promotion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-list-promotion',
  templateUrl: './card-list-promotion.component.html',
  styleUrls: ['./card-list-promotion.component.scss']
})
export class CardListPromotionComponent implements OnInit {
  productsOnSale: ProductPromotion[] = [];
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(
    private promotionService: PromotionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.promotionService.getProductsOnSale().subscribe({
      next: (data: ProductPromotion[]) => {
        console.log('Produtos em promoção', data);
        this.productsOnSale = data;
      },
      error: (err) => {
        console.error('Erro ao carregar promoções:', err);
      }
    });
  }
  
  
  get totalPages(): number {
    return Math.ceil(this.productsOnSale.length / this.pageSize);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  goToHomePage(): void {
    this.router.navigate(['/']);
  }
}
