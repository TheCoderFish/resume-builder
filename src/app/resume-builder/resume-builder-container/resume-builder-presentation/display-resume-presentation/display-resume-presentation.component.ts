import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DisplayResumePresenter } from '../display-resume-presenter/display-resume-presenter.service';

@Component({
  selector: 'display-resume-presentation-ui',
  templateUrl: './display-resume-presentation.component.html',
  styleUrls: ['./display-resume-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [DisplayResumePresenter]
})
export class DisplayResumePresentationComponent implements OnInit {

  @Input()
  public set resumeDetails(value) {
    if (value) {
      this._resumeDetails = value
    }
  }

  public get resumeDetails() {
    return this._resumeDetails;
  }

  private _resumeDetails;

  constructor(private displayResumePresenter: DisplayResumePresenter) { }

  ngOnInit() {
  }

}
