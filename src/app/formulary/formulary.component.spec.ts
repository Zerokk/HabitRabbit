import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularyComponent } from './formulary.component';

describe('FormularyComponent', () => {
  let component: FormularyComponent;
  let fixture: ComponentFixture<FormularyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularyComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
