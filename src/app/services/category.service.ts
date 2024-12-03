import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGrupo } from "../interfaces/group";
import { Product } from "../interfaces/products";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private urlCategorias = 'http://10.0.1.135:8082/grupos'; // Considerar configurar essa URL

  constructor(private http: HttpClient) { }

  // Método para pegar as categorias
  getCategorias(): Observable<IGrupo[]> {
    return this.http.get<IGrupo[]>(this.urlCategorias);
  }

  // Método para pegar os produtos de uma categoria
  getProdutosPorCategoria(categoriaId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlCategorias}/${categoriaId}/produtos`); // Ajuste da URL
  }
}
