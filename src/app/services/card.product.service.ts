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
  // private apiUrl = 'http://8b38091fc43d.sn.mynetname.net:2001/dev/cheff/api/public/api/product';

  private urlProdutos = 'http://10.0.1.135:8080'; 

  private products: Product[] = [];
  productsOnSale: Product[] = [];
  categoria: IGrupo[] = [];
  

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    if (this.products.length) {
      return of(this.products);
    }
  
    return this.http.get<any[]>(`${this.urlProdutos}/produtos`).pipe(
      tap(data => this.products = data) 
    );
  }
  
  filterProductOnSale(): any[] {
    const produtosEmPromocao = this.products.filter(produto => produto.promocao === 'S');
    // console.log("Está retornando")
    return produtosEmPromocao;
  }
 
}
