import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtalkComponent } from './htalk.component';

describe('HtalkComponent', () => {
  let component: HtalkComponent;
  let fixture: ComponentFixture<HtalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
