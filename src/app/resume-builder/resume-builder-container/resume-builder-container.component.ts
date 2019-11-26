import { Component, OnInit } from '@angular/core';
import { ResumeBuilderService } from '../resume-builder.service';
import { Observable } from 'rxjs';
import { ResumeDetails } from '../resume-detail.model';

@Component({
  selector: 'app-resume-builder-container',
  templateUrl: './resume-builder-container.component.html',
  styleUrls: ['./resume-builder-container.component.scss']
})
export class ResumeBuilderContainerComponent implements OnInit {

  public cities$: Observable<string[]>;
  public states$: Observable<string[]>;

  constructor(private resumeBuilderService: ResumeBuilderService) { }

  ngOnInit() {
    this.cities$ = this.resumeBuilderService.getCities();
    this.states$ = this.resumeBuilderService.getStates();
  }

  public saveResumeDetails(resumeDetails: ResumeDetails) {
    this.resumeBuilderService.saveResume(resumeDetails).subscribe(response => {
      console.log('Resume Saved Successfully');
    });
  }
}
