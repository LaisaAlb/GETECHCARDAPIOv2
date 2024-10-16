import { Component, OnInit } from '@angular/core';
import { CardProductService } from '../../services/card.product.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit{

  productsCards: any[] = []; 

  constructor(private cardProductService: CardProductService) {} 
  
  ngOnInit(): void {
    this.cardProductService.getProducts().subscribe((data: any[]) => {
      this.productsCards = data; 
    });
  }
}
