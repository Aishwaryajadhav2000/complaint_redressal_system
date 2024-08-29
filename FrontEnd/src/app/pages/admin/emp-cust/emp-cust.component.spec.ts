import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCustComponent } from './emp-cust.component';

describe('EmpCustComponent', () => {
  let component: EmpCustComponent;
  let fixture: ComponentFixture<EmpCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpCustComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
