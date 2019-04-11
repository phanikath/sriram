import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecboxtableComponent } from './checboxtable.component';

describe('ChecboxtableComponent', () => {
  let component: ChecboxtableComponent;
  let fixture: ComponentFixture<ChecboxtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecboxtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecboxtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
