import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { IGrupo } from '../../interfaces/group';
import { Product } from '../../interfaces/products';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonComponent implements OnInit {

  categorias: IGrupo[] = [];
  produtos: Product[] = [];
  categoriaSelecionada: number | null = null;  // Variável para armazenar a categoria selecionada
  mostrarProdutos: boolean = false;  // Controle de visibilidade dos produtos

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  // Carregar as categorias no início
  carregarCategorias(): void {
    this.categoryService.getCategorias().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
      }
    });
  }

  // Carregar os produtos de acordo com a categoria selecionada
  carregarProdutos(categoriaId: number): void {
    this.categoriaSelecionada = categoriaId;
    this.mostrarProdutos = true;  // Ativar a exibição dos produtos ao clicar no botão da categoria
  
    // Chama o serviço para obter os produtos da categoria
    this.categoryService.getProdutosPorCategoria(categoriaId).subscribe({
      next: (data) => {
        console.log('Resposta da API:', data);  // Verifique a resposta
        this.produtos = data || [];   // Agora usa diretamente `data` que é um array de produtos
        console.log('Produtos carregados para a categoria:', categoriaId);
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.produtos = [];  // Limpa a lista de produtos em caso de erro
      }
    });
  }
}
