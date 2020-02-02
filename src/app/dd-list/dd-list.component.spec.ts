/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DdListComponent } from './dd-list.component';

describe('DdListComponent', () => {
  let component: DdListComponent;
  let fixture: ComponentFixture<DdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
