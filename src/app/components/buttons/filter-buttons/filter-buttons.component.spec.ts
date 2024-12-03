import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterButtonComponent } from './filter-buttons.component';

describe('FilterCardsProductComponent', () => {
  let component: FilterButtonComponent;
  let fixture: ComponentFixture<FilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
