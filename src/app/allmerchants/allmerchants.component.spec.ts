import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmerchantsComponent } from './allmerchants.component';

describe('AllmerchantsComponent', () => {
  let component: AllmerchantsComponent;
  let fixture: ComponentFixture<AllmerchantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmerchantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
