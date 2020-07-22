import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmerchantsComponent } from './addmerchants.component';

describe('AddmerchantsComponent', () => {
  let component: AddmerchantsComponent;
  let fixture: ComponentFixture<AddmerchantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmerchantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
