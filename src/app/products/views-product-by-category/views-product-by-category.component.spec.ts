import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsProductByCategoryComponent } from './views-product-by-category.component';

describe('ViewsProductByCategoryComponent', () => {
  let component: ViewsProductByCategoryComponent;
  let fixture: ComponentFixture<ViewsProductByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsProductByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
