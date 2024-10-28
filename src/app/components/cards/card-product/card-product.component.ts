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

  constructor(
    private cardProductService: CardProductService,
    private router: Router
  ) {} 
  
  ngOnInit(): void {
    this.cardProductService.getProducts().subscribe((data: any[]) => {
      this.productsCards = data.slice(0, 4); 
    });
  }

  next() {
    this.router.navigate(['/list']); 
  }
}

