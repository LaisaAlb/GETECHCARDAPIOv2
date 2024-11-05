import { IGrupo } from "./group";
export interface Product {
    promocao: string;
    id: number;
    name: string;
    price: number;
    promotion: boolean;
    grupo: IGrupo;
}
