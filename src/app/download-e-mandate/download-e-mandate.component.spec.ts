import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEMandateComponent } from './download-e-mandate.component';

describe('DownloadEMandateComponent', () => {
  let component: DownloadEMandateComponent;
  let fixture: ComponentFixture<DownloadEMandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadEMandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadEMandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
