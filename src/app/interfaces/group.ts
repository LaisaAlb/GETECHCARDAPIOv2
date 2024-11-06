import { Product } from "./products";

export interface IGrupo {
    id: number;
    descricao: string;
    produtos: Product[];  
  }
  