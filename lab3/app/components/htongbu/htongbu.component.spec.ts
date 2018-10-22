import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtongbuComponent } from './htongbu.component';

describe('HtongbuComponent', () => {
  let component: HtongbuComponent;
  let fixture: ComponentFixture<HtongbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtongbuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtongbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
