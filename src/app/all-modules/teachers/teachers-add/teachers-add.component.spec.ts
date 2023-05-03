import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachersAddComponent } from './teachers-add.component';

describe('TeachersAddComponent', () => {
  let component: TeachersAddComponent;
  let fixture: ComponentFixture<TeachersAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
