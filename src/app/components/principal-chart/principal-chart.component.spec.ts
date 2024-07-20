import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalChartComponent } from './principal-chart.component';

describe('PrincipalChartComponent', () => {
  let component: PrincipalChartComponent;
  let fixture: ComponentFixture<PrincipalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
