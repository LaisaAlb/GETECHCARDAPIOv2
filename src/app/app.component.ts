import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { url } from 'inspector';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'g3_cardapio';

  @Input() animationSpeed = 500;
  
  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  slides: any[] = [
    {
      url: '/assets/img/slide1.jpg',
      title: 'Primeiro Slide',
      description: 'Esse é o primeiro slide :O',
    },

    {
      url: '/assets/img/slide2.jpg',
      title: 'Segundo Slide',
      description: 'Esse é o segundo slide',
    },

    {
      url: '/assets/img/slide3.jpg',
      title: 'Terceiro Slide',
      description: 'Esse é o terceiro slide',
    },

    {
      url: '/assets/img/slide4.jpg',
      title: 'Quarto Slide',
      description: 'Esse é o quarto slide',
    },

    {
      url: '/assets/img/slide5.jpg',
      title: 'Quinto Slide',
      description: 'Esse é o quinto slide',
    },
  ];

  //Next products
  next() {
    let nextSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(nextSlide);
  }
  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  constructor(){

  }
  ngOnDestroy(): void {
    
  }
  ngOnInit() {
      
  }

}

