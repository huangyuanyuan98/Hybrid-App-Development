import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtellComponent } from './htell.component';

describe('HtellComponent', () => {
  let component: HtellComponent;
  let fixture: ComponentFixture<HtellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
