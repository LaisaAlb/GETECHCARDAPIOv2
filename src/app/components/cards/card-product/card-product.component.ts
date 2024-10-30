import { Router } from '@angular/router';
import { CardProductService } from '../../../services/card.product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/products';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']  
})
export class CardProductComponent implements OnInit {
  
  @Input() products: Product[] = [];
  productsCards: any[] = [];
  quantities: { [key: number]: number } = {}; // Armazenar quantidades

  constructor(
    private cardProductService: CardProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cardProductService.getProducts().subscribe((data: any[]) => {
      this.productsCards = data.slice(0, 4);
      this.productsCards.forEach((_, index) => {
        this.quantities[index] = 0; // Inicializa a quantidade como 0
      });
    });
  }

  increaseQuantity(index: number) {
    this.quantities[index]++;
  }

  decreaseQuantity(index: number) {
    if (this.quantities[index] = 1) {
      this.quantities[index]--;
    }
  }

  next() {
    this.router.navigate(['/list']);
  }
}

