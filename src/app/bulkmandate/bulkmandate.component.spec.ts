import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkmandateComponent } from './bulkmandate.component';

describe('BulkmandateComponent', () => {
  let component: BulkmandateComponent;
  let fixture: ComponentFixture<BulkmandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkmandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkmandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
