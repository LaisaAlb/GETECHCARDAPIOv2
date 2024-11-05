import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCardsProductComponent } from './filter-buttons.component';

describe('FilterCardsProductComponent', () => {
  let component: FilterCardsProductComponent;
  let fixture: ComponentFixture<FilterCardsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterCardsProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterCardsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
