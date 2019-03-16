import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilescreenPage } from './profilescreen.page';

describe('ProfilescreenPage', () => {
  let component: ProfilescreenPage;
  let fixture: ComponentFixture<ProfilescreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilescreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilescreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
