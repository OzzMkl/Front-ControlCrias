import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCriasTodoComponent } from './ver-crias-todo.component';

describe('VerCriasTodoComponent', () => {
  let component: VerCriasTodoComponent;
  let fixture: ComponentFixture<VerCriasTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCriasTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCriasTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
