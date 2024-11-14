import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from '../interfaces/products';
import { IGrupo } from '../interfaces/group';

@Injectable({
  providedIn: 'root'
})
export class CardProductService {

  private urlProdutos = 'http://localhost:8080'; 

  private products: Product[] = [];
  productsOnSale: Product[] = [];
  categoria: IGrupo[] = [];
  
  constructor(private http: HttpClient) {}

  // Carrega todos os produtos
  getProducts(): Observable<Product[]> {
    if (this.products.length) {
      return of(this.products); // Se já tiver produtos carregados, retorna do cache
    }
  
    return this.http.get<Product[]>(`${this.urlProdutos}/produtos`).pipe(
      tap(data => this.products = data)  // Salva os produtos no cache
    );
  }

  // Filtra produtos em promoção
  filterProductOnSale(): Product[] {
    return this.products.filter(produto => produto.promocao === 'S');
  }
}
