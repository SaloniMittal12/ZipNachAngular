import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateformComponent } from './mandateform.component';

describe('MandateformComponent', () => {
  let component: MandateformComponent;
  let fixture: ComponentFixture<MandateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
