import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CardProductService } from '../../../services/card.product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list-promotion',
  templateUrl: './card-list-promotion.component.html',
  styleUrls: ['./card-list-promotion.component.scss']
})
export class CardListPromotionComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  productsOnSale: any[] = [];
  groupedProducts: any[] = [];

  constructor(
    private cardProductService: CardProductService, 
    private router: Router
  ) {}

  ngOnInit() {
    // Carregar os produtos e depois aplicar o filtro de produtos em promoção
    this.cardProductService.getProducts().subscribe(() => {
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
