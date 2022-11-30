import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessibilitybarComponent } from './acessibilitybar.component';

describe('AcessibilitybarComponent', () => {
  let component: AcessibilitybarComponent;
  let fixture: ComponentFixture<AcessibilitybarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessibilitybarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessibilitybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
