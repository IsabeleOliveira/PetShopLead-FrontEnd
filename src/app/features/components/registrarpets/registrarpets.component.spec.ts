import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarpetsComponent } from './registrarpets.component';

describe('RegistrarpetsComponent', () => {
  let component: RegistrarpetsComponent;
  let fixture: ComponentFixture<RegistrarpetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarpetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
