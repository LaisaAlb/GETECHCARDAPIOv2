import { Component } from '@angular/core';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'g3_cardapio';
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
}
