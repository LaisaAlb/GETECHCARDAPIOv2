import { CardProductService } from './../../services/card.product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit {

  productsCards: any[] = []; 

  constructor(
    private CardProductService: CardProductService
    ){}; 
  
   ngOnInit(): void {
    this.CardProductService.getProducts().subscribe((data: any[])=> {
      this.productsCards = data.slice(0, 4); 
    })
   }

}
