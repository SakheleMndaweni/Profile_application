import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExabotComponent } from './exabot.component';

describe('ExabotComponent', () => {
  let component: ExabotComponent;
  let fixture: ComponentFixture<ExabotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExabotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExabotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
