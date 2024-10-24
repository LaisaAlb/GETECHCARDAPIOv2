import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardProductService {
  // private apiUrl = 'http://8b38091fc43d.sn.mynetname.net:2001/dev/cheff/api/public/api/product';
  private apiUrl = 'http://10.0.1.135:8080'; 
  private products: any[] = []; 
  productsOnSale: any[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    if (this.products.length) {
      return of(this.products);
    }
  
    return this.http.get<any[]>(`${this.apiUrl}/produtos`).pipe(
      tap(data => this.products = data) 
    );
  }
  

  // getImage(): Observable<string> {
  //   return this.http.get('http://10.0.1.135:8080', { responseType: 'text' });
  // }

  // filtersaleProdutosEmPromocao(): any[] {
  //   return this.products.filter(produto => produto.promocao === 's');
  // }  

  filtersaleProdutosEmPromocao(): any[] {
    const produtosEmPromocao = this.products.filter(produto => produto.promocao === 'S');
    // console.log("Está retornando")
    return produtosEmPromocao;
  }

}

