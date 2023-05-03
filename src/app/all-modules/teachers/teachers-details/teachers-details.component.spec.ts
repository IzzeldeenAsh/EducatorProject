import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachersDetailsComponent } from './teachers-details.component';

describe('TeachersDetailsComponent', () => {
  let component: TeachersDetailsComponent;
  let fixture: ComponentFixture<TeachersDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
