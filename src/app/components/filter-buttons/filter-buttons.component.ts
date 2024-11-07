import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { IGrupo } from '../../interfaces/group';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonComponent implements OnInit {

  categorias: IGrupo[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.carregarCategorias();

    // Escuta as mudanças de rota
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Sempre que a navegação terminar, recarrega as categorias
      this.carregarCategorias();
    });
  }

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

  carregarProdutos(categoriaId: number): void {
    this.router.navigate([`/produtos/${categoriaId}`]);
  }

  next() {
    this.router.navigate(['/listPromotion']);
  }
  nextList(){
    this.router.navigate(['/list'])
  }
  
}

