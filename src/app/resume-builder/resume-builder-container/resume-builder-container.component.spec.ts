import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBuilderContainerComponent } from './resume-builder-container.component';

describe('ResumeBuilderContainerComponent', () => {
  let component: ResumeBuilderContainerComponent;
  let fixture: ComponentFixture<ResumeBuilderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeBuilderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBuilderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
