import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardProductService {
  constructor(private _httpClient: HttpClient) {}

  private urlCategorias = 'http://10.0.1.135:8081/';

  getProducts(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.urlCategorias}/precos`).pipe(
      map((data) =>
        data.map((item) => ({
          id: item.id,
          name: item.produtos?.name || '',
          description: item.produtos?.description || '',
          imagem: item.produtos?.imagem || null,
          tipoPagamento: item.tipoPagamento,
          preco: item.preco
        }))
      )
    );
  }
}
