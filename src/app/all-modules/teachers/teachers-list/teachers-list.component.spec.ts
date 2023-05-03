import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachersListComponent } from './teachers-list.component';

describe('TeachersListComponent', () => {
  let component: TeachersListComponent;
  let fixture: ComponentFixture<TeachersListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});