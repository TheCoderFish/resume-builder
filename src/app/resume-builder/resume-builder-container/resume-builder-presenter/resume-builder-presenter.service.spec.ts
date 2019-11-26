import { TestBed } from '@angular/core/testing';

import { ResumeBuilderPresenter } from './resume-builder-presenter.service';

describe('ResumeBuilderPresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeBuilderPresenter = TestBed.get(ResumeBuilderPresenter);
    expect(service).toBeTruthy();
  });
});
