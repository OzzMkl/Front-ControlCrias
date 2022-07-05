import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCriasModuloComponent } from './ver-crias-modulo.component';

describe('VerCriasModuloComponent', () => {
  let component: VerCriasModuloComponent;
  let fixture: ComponentFixture<VerCriasModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCriasModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCriasModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
