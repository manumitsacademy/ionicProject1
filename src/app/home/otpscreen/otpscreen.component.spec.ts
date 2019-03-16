import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpscreenPage } from './otpscreen.page';

describe('OtpscreenPage', () => {
  let component: OtpscreenPage;
  let fixture: ComponentFixture<OtpscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpscreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
