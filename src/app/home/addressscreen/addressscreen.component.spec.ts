import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressscreenPage } from './addressscreen.page';

describe('AddressscreenPage', () => {
  let component: AddressscreenPage;
  let fixture: ComponentFixture<AddressscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressscreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
