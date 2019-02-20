import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkemandateComponent } from './bulkemandate.component';

describe('BulkemandateComponent', () => {
  let component: BulkemandateComponent;
  let fixture: ComponentFixture<BulkemandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkemandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkemandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
