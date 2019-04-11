import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollinfinityComponent } from './scrollinfinity.component';

describe('ScrollinfinityComponent', () => {
  let component: ScrollinfinityComponent;
  let fixture: ComponentFixture<ScrollinfinityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollinfinityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollinfinityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
