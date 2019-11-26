import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ResumeBuilderPresenter } from '../resume-builder-presenter/resume-builder-presenter.service';

@Component({
  selector: 'resume-builder-presentation-ui',
  templateUrl: './resume-builder-presentation.component.html',
  styleUrls: ['./resume-builder-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [ResumeBuilderPresenter]
})
export class ResumeBuilderPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
