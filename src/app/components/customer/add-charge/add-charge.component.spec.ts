import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddFixedComponent } from './add-charge.component';

describe('AddFixedFeeComponent', () => {
  let component: CustomerAddFixedComponent;
  let fixture: ComponentFixture<CustomerAddFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
