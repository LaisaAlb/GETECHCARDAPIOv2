import { Component, OnInit } from '@angular/core'; 
import { CardProductService } from '../../services/card.product.service';
import { IGrupo } from '../../interfaces/group';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonComponent implements OnInit {

  categorias: IGrupo[] = [];
  categoriasFiltradas: IGrupo[] = [];
  
  constructor(private cardService: CardProductService) {}

  ngOnInit() {
    // Carregar as categorias do serviço
    this.cardService.getObterCategoria().subscribe(
      (data: IGrupo[]) => {
        this.categorias = data;  // Armazena as categorias no array categorias
        this.categoriasFiltradas = data; // Inicialmente, as categorias filtradas são todas
      },
      error => {
        console.error('Erro ao buscar categorias', error);
      }
    );
  }

  // Método para filtrar categorias por nome ou id
  // Modificado para receber um evento de input com o tipo correto
  filtrarCategorias(nome: string | null, id: number | null) {
    if (!nome && !id) {
      // Se não passar nome nem id, reseta as categorias filtradas
      this.categoriasFiltradas = this.categorias;
    } else {
      this.categoriasFiltradas = this.categorias.filter(categoria => 
        (nome && categoria.descricao === nome) || 
        (id && categoria.id === id)
      );
    }
  }
  
  // Adicionando o tipo de evento ao método de filtro
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Aqui, afirmamos que o evento é de um HTMLInputElement
    this.filtrarCategorias(input.value, null); // Chamando filtrarCategorias com o valor do input
  }
}
