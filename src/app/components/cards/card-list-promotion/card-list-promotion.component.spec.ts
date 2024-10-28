import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListPromotionComponent } from './card-list-promotion.component';

describe('CardListPromotionComponent', () => {
  let component: CardListPromotionComponent;
  let fixture: ComponentFixture<CardListPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListPromotionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardListPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
