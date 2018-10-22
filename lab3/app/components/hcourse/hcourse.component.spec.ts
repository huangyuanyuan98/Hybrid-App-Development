import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcourseComponent } from './hcourse.component';

describe('HcourseComponent', () => {
  let component: HcourseComponent;
  let fixture: ComponentFixture<HcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
