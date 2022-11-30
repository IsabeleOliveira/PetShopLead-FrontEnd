import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet1Component } from './pet1.component';

describe('Pet1Component', () => {
  let component: Pet1Component;
  let fixture: ComponentFixture<Pet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
