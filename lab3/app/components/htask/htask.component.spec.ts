import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtaskComponent } from './htask.component';

describe('HtaskComponent', () => {
  let component: HtaskComponent;
  let fixture: ComponentFixture<HtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
