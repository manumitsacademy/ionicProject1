import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstscreenPage } from './firstscreen.page';

describe('FirstscreenPage', () => {
  let component: FirstscreenPage;
  let fixture: ComponentFixture<FirstscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstscreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
