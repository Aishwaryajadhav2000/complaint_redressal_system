import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngHeadingComponent } from './eng-heading.component';

describe('EngHeadingComponent', () => {
  let component: EngHeadingComponent;
  let fixture: ComponentFixture<EngHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
