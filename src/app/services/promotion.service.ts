import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductPromotion } from '../interfaces/productPromotion';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  private urlPromotions = 'http://10.0.1.135:8082/promocao';

  constructor(private http: HttpClient) {}

  // Busca todos os produtos em promoção
  getProductsOnSale(): Observable<ProductPromotion[]> {
    return this.http.get<ProductPromotion[]>(this.urlPromotions); 
  }
}
