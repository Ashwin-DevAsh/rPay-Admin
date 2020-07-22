import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadminsComponent } from './addadmins.component';

describe('AddadminsComponent', () => {
  let component: AddadminsComponent;
  let fixture: ComponentFixture<AddadminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
