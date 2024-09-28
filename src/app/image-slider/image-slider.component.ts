import { Component, Input, OnInit, OnDestroy, NgZone } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input() slides: any[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = true;
  @Input() autoPlaySpeed = 5000;
  currentSlide = 0;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  intervalId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  startAutoPlay() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => this.next());
      }, this.autoPlaySpeed); // Intervalo do autoplay
    });
  }

  next() {
    let nextSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(nextSlide);
  }

  previous() {
    let prevSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(prevSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
