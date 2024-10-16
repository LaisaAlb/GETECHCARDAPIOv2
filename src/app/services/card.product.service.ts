import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardProductService {

  private apiUrl = 'http://8b38091fc43d.sn.mynetname.net:2001/dev/cheff/api/public/api/product'; 

  constructor(private http:HttpClient) { }

 getProducts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/products`)
  }
}
