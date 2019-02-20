import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmandateComponent } from './uploadmandate.component';

describe('UploadmandateComponent', () => {
  let component: UploadmandateComponent;
  let fixture: ComponentFixture<UploadmandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadmandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadmandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
