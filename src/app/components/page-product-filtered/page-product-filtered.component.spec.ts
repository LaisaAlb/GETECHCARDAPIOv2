import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductFilteredComponent } from './page-product-filtered.component';

describe('PageProductFilteredComponent', () => {
  let component: PageProductFilteredComponent;
  let fixture: ComponentFixture<PageProductFilteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageProductFilteredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
