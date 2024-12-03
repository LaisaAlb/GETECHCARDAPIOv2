import { Component, OnInit } from '@angular/core';
import { CardProductService } from '../../../services/card.product.service';
import { Product } from '../../../interfaces/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  productsCards: Product[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  totalPages: number = 0;

  constructor(
    private cardProductService: CardProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts(this.currentPage);
  }

  // Carrega produtos paginados
  loadProducts(page: number): void {
    this.cardProductService.getPaginatedProducts(page, this.pageSize).subscribe((data) => {
      this.productsCards = data;
      this.totalPages = this.cardProductService.getTotalPages();
    });
  }

  // Paginação - Página Anterior
  previous(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadProducts(this.currentPage);
    }
  }

  // Paginação - Próxima Página
  next(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadProducts(this.currentPage);
    }
  }

  // Scroll para o topo
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Navegar para a página anterior
  previousPage(): void {
    this.router.navigate(['']);
  }
}
