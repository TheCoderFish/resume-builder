import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ResumeBuilderPresenter } from '../resume-builder-presenter/resume-builder-presenter.service';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'resume-builder-presentation-ui',
  templateUrl: './resume-builder-presentation.component.html',
  styleUrls: ['./resume-builder-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [ResumeBuilderPresenter]
})
export class ResumeBuilderPresentationComponent implements OnInit {

  public resumeForm: FormGroup;

  constructor(private resumeBuilderPresenter: ResumeBuilderPresenter) { }

  ngOnInit() {
    this.resumeForm = this.resumeBuilderPresenter.buildForm();

    this.resumeForm.valueChanges.pipe().subscribe(x => {
      console.log(this.resumeForm.value);
    });
  }

  public addEducation() {
    const educationDetails: FormArray = this.resumeForm.get('education') as FormArray;
    this.resumeBuilderPresenter.addEducation(educationDetails);
  }
  public addExperience() {
    const experienceDetails: FormArray = this.resumeForm.get('experience') as FormArray;
    this.resumeBuilderPresenter.addExperience(experienceDetails);
  }

  public get education(){
    return this.resumeForm.get('education') as FormArray;
  }

  public get experience(){
    return this.resumeForm.get('experience') as FormArray;
  }

}
