import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextjobComponent } from './nextjob.component';

describe('NextjobComponent', () => {
  let component: NextjobComponent;
  let fixture: ComponentFixture<NextjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
