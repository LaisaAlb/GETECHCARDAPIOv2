import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent  implements OnInit{

  promotionalProducts: Product [] = [];
  allProducts: Product[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  products: any;
  categories: any;
  promotions: any;


  ngOnInit(): void {
    this.route.data.subscribe(({ data }) => {
      this.products = data.products; // Dados de produtos
      this.categories = data.categories; // Dados de categorias
      this.promotions = data.promotions; // Dados de promoções
    });
  }

  //Next products
  next() {
    this.router.navigate(['/listPromotion']);
  }
  nextList(){
    this.router.navigate(['/list'])
  }

  nextButtonsCategory(){
    this.router.navigate(['/categoryListFilterButtons'])
  }
  
}

