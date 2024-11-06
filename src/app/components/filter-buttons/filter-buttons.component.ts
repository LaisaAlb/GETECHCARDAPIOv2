import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { IGrupo } from '../../interfaces/group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonComponent implements OnInit {

  categorias: IGrupo[] = [];
  categoriaSelecionada: number | null = null;  // Variável para armazenar a categoria selecionada

  constructor(private categoryService: CategoryService, private router: Router) {}

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

  // Navegar para a página de produtos filtrados
  carregarProdutos(categoriaId: number): void {
    // Navegar para a página de produtos filtrados
    this.router.navigate([`/produtos/${categoriaId}`]);  // Navegar para a URL 'produtos/:categoriaId'
  }
}
