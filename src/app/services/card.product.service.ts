import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from '../interfaces/products';
import { IGrupo } from '../interfaces/group';
@Injectable({
  providedIn: 'root'
})
export class CardProductService {
  private apiUrl = 'http://8b38091fc43d.sn.mynetname.net:2001/dev/cheff/api/public/api/product';
  // private apiUrl = 'http://10.0.1.135:8080'; 
  private products: Product[] = [];
  productsOnSale: Product[] = [];
  categoria: IGrupo[] = [];
  

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    if (this.products.length) {
      return of(this.products);
    }
  
    return this.http.get<any[]>(`${this.apiUrl}/produtos`).pipe(
      tap(data => this.products = data) 
    );
  }
  
  filterProductOnSale(): any[] {
    const produtosEmPromocao = this.products.filter(produto => produto.promocao === 'S');
    // console.log("Está retornando")
    return produtosEmPromocao;
  }

  getObterCategoria(): Observable<IGrupo[]> {
    return this.http.get<IGrupo[]>(`${this.apiUrl}/grupo`).pipe(
      map(data => data.filter(categoria => categoria.descricao)), // Filtrando categorias com nome definido
      tap(data => this.categoria = data) // Armazenando as categorias no array categoria
    );
  }
  
  
}
