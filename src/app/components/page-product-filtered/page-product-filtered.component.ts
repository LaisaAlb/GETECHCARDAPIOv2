import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-product-filtered',
  templateUrl: './page-product-filtered.component.html',
  styleUrls: ['./page-product-filtered.component.scss']
})
export class PageProductFilteredComponent implements OnInit {

  produtos: Product[] = [];
  categoriaId: number | null = null;  // ID da categoria selecionada
  faArrowLeft = faArrowLeft;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    // Captura o parâmetro da rota (categoriaId)
    this.route.paramMap.subscribe(params => {
      // O tipo de `params` é `ParamMap` e tem o método `get` para pegar o parâmetro
      this.categoriaId = +params.get('categoriaId')!;  // Converte o parâmetro para número e usa o operador de assertividade (if non-null assertion)
      this.carregarProdutos();  // Carregar produtos após obter o parâmetro
    });
  }

  // Carregar os produtos de acordo com a categoria selecionada
  carregarProdutos(): void {
    if (this.categoriaId !== null) {
      this.categoryService.getProdutosPorCategoria(this.categoriaId).subscribe({
        next: (data) => {
          this.produtos = data || [];  // Atualiza a lista de produtos
        },
        error: (err) => {
          console.error('Erro ao carregar produtos:', err);
          this.produtos = [];  // Limpa a lista de produtos em caso de erro
        }
      });
    }
  }

  previous() {
    this.router.navigate(['']);
  }
}
