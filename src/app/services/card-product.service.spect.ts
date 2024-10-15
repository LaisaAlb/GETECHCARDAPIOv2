import { TestBed } from '@angular/core/testing';
import { CardProductService } from './card.product.service';

describe('CardProductService', () => {
  let service: CardProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
