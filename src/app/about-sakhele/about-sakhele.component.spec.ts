import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSakheleComponent } from './about-sakhele.component';

describe('AboutSakheleComponent', () => {
  let component: AboutSakheleComponent;
  let fixture: ComponentFixture<AboutSakheleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSakheleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSakheleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
