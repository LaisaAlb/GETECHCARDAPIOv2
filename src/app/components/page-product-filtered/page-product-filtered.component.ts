import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../interfaces/products';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-page-product-filtered',
  templateUrl: './page-product-filtered.component.html',
  styleUrls: ['./page-product-filtered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageProductFilteredComponent implements OnInit {

  produtos: Product[] = [];
  categoriaId: number | null = null;
  faArrowLeft = faArrowLeft;
  isLoading = true; // Inicialmente true para mostrar o spinner

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriaId = +params.get('categoriaId')!;
      this.carregarProdutos();
    });
  }

  carregarProdutos(): void {
    if (this.categoriaId !== null) {
      this.isLoading = true;
      this.categoryService.getProdutosPorCategoria(this.categoriaId).subscribe({
        next: (data) => {
          this.produtos = data || [];
          this.isLoading = false;
          this.cdr.markForCheck(); // Marca para verificação de mudanças
        },
        error: (err) => {
          console.error('Erro ao carregar produtos:', err);
          this.produtos = [];
          this.isLoading = false;
          this.cdr.markForCheck(); // Marca para verificação de mudanças em caso de erro
        }
      });
    }
  }

  previous() {
    this.router.navigate(['']);
  }

  recarregarCategoria(): void {
    this.router.navigate([`/produtos/${this.categoriaId}`]).then(() => {
      this.carregarProdutos();
    });
  }

}
