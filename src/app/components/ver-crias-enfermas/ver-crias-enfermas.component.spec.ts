import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCriasEnfermasComponent } from './ver-crias-enfermas.component';

describe('VerCriasEnfermasComponent', () => {
  let component: VerCriasEnfermasComponent;
  let fixture: ComponentFixture<VerCriasEnfermasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCriasEnfermasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCriasEnfermasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
