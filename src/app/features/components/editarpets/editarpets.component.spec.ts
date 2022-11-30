import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpetsComponent } from './editarpets.component';

describe('EditarpetsComponent', () => {
  let component: EditarpetsComponent;
  let fixture: ComponentFixture<EditarpetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarpetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
