import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkresendemandateComponent } from './bulkresendemandate.component';

describe('BulkresendemandateComponent', () => {
  let component: BulkresendemandateComponent;
  let fixture: ComponentFixture<BulkresendemandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkresendemandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkresendemandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
