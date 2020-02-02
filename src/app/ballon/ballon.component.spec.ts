/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallonComponent } from './ballon.component';

describe('BallonComponent', () => {
  let component: BallonComponent;
  let fixture: ComponentFixture<BallonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
