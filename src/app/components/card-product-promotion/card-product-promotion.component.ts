import { CardProductService } from './../../services/card.product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-product-promotion',
  templateUrl: './card-product-promotion.component.html',
  styleUrl: './card-product-promotion.component.scss'
})
export class CardProductPromotionComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  productsOnSale: any[] = [];

  constructor(
    private cardProduct: CardProductService,
    private router: Router
  ) { }

  ngOnInit() {
    // Carregar produtos primeiro
    this.cardProduct.getProducts().subscribe(() => {
      // Depois que os produtos foram carregados, filtrar os produtos em promoção
      this.productsOnSale = this.cardProduct.filtersaleProdutosEmPromocao();
    });
  }
  // this.cardProductService.getProducts().subscribe((data: any[]) => {
  //   this.productsCards = data;
  // });
  // this.loadProducts();
  // loadProducts() {
  //   this.card. getFilterProductsOnSale().subscribe(data => {
  //     this.productsOnSale = data; 
  //   });
  // }
}


