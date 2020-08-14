import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3CustomerComponent } from './lab3-customer.component';

describe('Lab3CustomerComponent', () => {
  let component: Lab3CustomerComponent;
  let fixture: ComponentFixture<Lab3CustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab3CustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
