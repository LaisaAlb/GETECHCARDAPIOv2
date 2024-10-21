import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardProductService {
  private apiUrl = 'http://8b38091fc43d.sn.mynetname.net:2001/dev/cheff/api/public/api/product';
  private products: any[] = []; 

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    
    if (this.products.length) {
      return of(this.products);
    }
   
    return this.http.get<any[]>(`${this.apiUrl}/products`).pipe(
      tap(data => this.products = data) 
    );
  }
}

