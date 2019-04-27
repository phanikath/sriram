import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattablesComponent } from './mattables.component';

describe('MattablesComponent', () => {
  let component: MattablesComponent;
  let fixture: ComponentFixture<MattablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
