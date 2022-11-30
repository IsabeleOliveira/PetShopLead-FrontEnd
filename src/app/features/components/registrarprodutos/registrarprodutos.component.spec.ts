import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarprodutosComponent } from './registrarprodutos.component';

describe('RegistrarprodutosComponent', () => {
  let component: RegistrarprodutosComponent;
  let fixture: ComponentFixture<RegistrarprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarprodutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});