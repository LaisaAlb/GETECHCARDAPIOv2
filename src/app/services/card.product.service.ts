import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from '../interfaces/products';
import { IPageable } from '../interfaces/page';

@Injectable({
  providedIn: 'root',
})
export class CardProductService {
  private urlProdutos = 'http://10.0.1.135:8082/produtos';
  private totalPages: number = 0;

  constructor(private http: HttpClient) {}

  // Produtos paginados
  getPaginatedProducts(pageNumber: number, pageSize: number): Observable<Product[]> {
    return this.http
      .get<IPageable>(`${this.urlProdutos}?page=${pageNumber}&size=${pageSize}`)
      .pipe(
        tap((data) => (this.totalPages = data.totalPages)),
        map((data) => data.content)
      );
  }

  // Todos os produtos
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlProdutos);
  }

  // Retorna total de páginas
  getTotalPages(): number {
    return this.totalPages;
  }
}
