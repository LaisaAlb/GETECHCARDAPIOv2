import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CardProductService } from '../../../services/card.product.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-card-list-promotion',
  templateUrl: './card-list-promotion.component.html',
  styleUrl: './card-list-promotion.component.scss'
})
export class CardListPromotionComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  productsOnSale: any[] = [];
  groupedProducts: any[] = [];

  constructor(private cardProductService: CardProductService, 
    private router: Router
  ) {}

  ngOnInit() {   
    // Carregar produtos primeiro
    this.cardProductService.getProducts().subscribe(() => {
      // Depois que os produtos foram carregados, filtrar os produtos em promoção
      this.productsOnSale = this.cardProductService.filterProductOnSale();
      this.groupedProducts = this.groupProducts(this.productsOnSale, 3);
    });
  }

  groupProducts(products: any[], groupSize: number): any[] {
    let groups = [];
    for (let i = 0; i < products.length; i += groupSize) {
      groups.push(products.slice(i, i + groupSize));
    }
    return groups;
  }
  previous() {
    this.router.navigate(['']);
  }
}
