import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngDashboardComponent } from './eng-dashboard.component';

describe('EngDashboardComponent', () => {
  let component: EngDashboardComponent;
  let fixture: ComponentFixture<EngDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
