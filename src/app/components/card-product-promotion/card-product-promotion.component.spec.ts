import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductPromotionComponent } from './card-product-promotion.component';

describe('CardProductPromotionComponent', () => {
  let component: CardProductPromotionComponent;
  let fixture: ComponentFixture<CardProductPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProductPromotionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProductPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
