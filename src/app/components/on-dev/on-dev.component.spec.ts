import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDevComponent } from './on-dev.component';

describe('OnDevComponent', () => {
  let component: OnDevComponent;
  let fixture: ComponentFixture<OnDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
