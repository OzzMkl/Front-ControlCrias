import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraCriaComponent } from './registra-cria.component';

describe('RegistraCriaComponent', () => {
  let component: RegistraCriaComponent;
  let fixture: ComponentFixture<RegistraCriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraCriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
