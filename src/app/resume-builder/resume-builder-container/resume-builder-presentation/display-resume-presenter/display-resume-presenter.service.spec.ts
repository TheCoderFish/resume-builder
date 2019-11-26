import { TestBed } from '@angular/core/testing';

import { DisplayResumePresenter } from './display-resume-presenter.service';

describe('DisplayResumePresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayResumePresenter = TestBed.get(DisplayResumePresenter);
    expect(service).toBeTruthy();
  });
});
