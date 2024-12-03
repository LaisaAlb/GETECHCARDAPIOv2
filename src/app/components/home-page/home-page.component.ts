import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CardProductService } from '../../services/card.product.service';
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
    private router: Router
  ) {}

  ngOnInit(): void {
  
  }
   faArrowRight = faArrowRight;
   faArrowLeft = faArrowLeft;

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

