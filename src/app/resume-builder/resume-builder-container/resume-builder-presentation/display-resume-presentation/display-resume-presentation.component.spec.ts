import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayResumePresentationComponent } from './display-resume-presentation.component';

describe('DisplayResumePresentationComponent', () => {
  let component: DisplayResumePresentationComponent;
  let fixture: ComponentFixture<DisplayResumePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayResumePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayResumePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
