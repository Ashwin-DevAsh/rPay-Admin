import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlladminsComponent } from './alladmins.component';

describe('AlladminsComponent', () => {
  let component: AlladminsComponent;
  let fixture: ComponentFixture<AlladminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlladminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlladminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
