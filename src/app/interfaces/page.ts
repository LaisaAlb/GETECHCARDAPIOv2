import { Product } from "./products"; 

export interface IPageable {
  content: Product[];  
  pageable: {
    pageNumber: number;  // Número da página atual
    pageSize: number;    // Tamanho da página
    sort: {
      empty: boolean;    // Se a ordenação está vazia
      sorted: boolean;   // Se a ordenação está ativada
      unsorted: boolean; // Se a ordenação está desativada
    };
    offset: number;
    paged: boolean;     // Se a paginação está ativa
    unpaged: boolean;   // Se não está paginado
  };
  totalPages: number;    // Total de páginas
  totalElements: number; // Total de elementos (produtos) no total
  size: number;          // Tamanho da página
  number: number;        // Número da página atual
  first: boolean;        // Se é a primeira página
  last: boolean;         // Se é a última página
  numberOfElements: number; // Número de elementos na página atual
  empty: boolean;        // Se a página está vazia
}
