import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListCategoryComponent } from './filter-list-category.component';

describe('FilterListCategoryComponent', () => {
  let component: FilterListCategoryComponent;
  let fixture: ComponentFixture<FilterListCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterListCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
