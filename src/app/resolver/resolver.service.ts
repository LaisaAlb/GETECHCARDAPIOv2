import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { CardProductService } from '../services/card.product.service';
import { CategoryService } from '../services/category.service';
import { PromotionService } from '../services/promotion.service';

@Injectable({
  providedIn: 'root'
})
export class resolverService implements Resolve<any> {
  constructor(
    private cardProduct: CardProductService,
    private categoryService: CategoryService,
    private promotionService: PromotionService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin({
      products: this.cardProduct.getAllProducts(), 
      categories: this.categoryService.getCategorias(),
      promotions: this.promotionService.getProductsOnSale() 
    });
  }
}
