import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InboxMainComponent } from './inbox-main.component';

describe('InboxMainComponent', () => {
  let component: InboxMainComponent;
  let fixture: ComponentFixture<InboxMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
