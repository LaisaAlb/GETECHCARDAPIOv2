import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IGrupo } from '../../../interfaces/group';
import { CategoryService } from '../../../services/category.service';
import { filter } from 'rxjs';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-list-category',
  templateUrl: './filter-list-category.component.html',
  styleUrls: ['./filter-list-category.component.scss'],
})
export class FilterListCategoryComponent implements OnInit {

  faArrowLeft = faArrowLeft; 
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

  previous() {
    this.router.navigate(['']);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
