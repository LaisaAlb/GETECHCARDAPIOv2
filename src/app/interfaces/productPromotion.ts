import { Product } from "./products";

export interface ProductPromotion {
    id: number;
    preco: number; 
    precoPromocional: number; 
    dataInicio: string | null; 
    dataFim: string | null;
    produto: Product; 
}