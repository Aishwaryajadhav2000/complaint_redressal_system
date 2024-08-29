import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustHeadingComponent } from './cust-heading.component';

describe('CustHeadingComponent', () => {
  let component: CustHeadingComponent;
  let fixture: ComponentFixture<CustHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
