import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private urlCategorias = 'http://10.0.1.135:8080/grupos';

   // Método para pegar as categorias
   getCategorias(): Observable<any> {
    return this.http.get<any[]>(this.urlCategorias);
  }

  // Método para pegar os produtos de uma categoria
  getProdutosPorCategoria(categoriaId: number): Observable<any> {
    return this.http.get<any>(`http://10.0.1.135:8080/produtos/${categoriaId}`);  // Usando categoriaId na URL
  }
  
}
