import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCriasComponent } from './ver-crias.component';

describe('VerCriasComponent', () => {
  let component: VerCriasComponent;
  let fixture: ComponentFixture<VerCriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
