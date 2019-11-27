import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ResumeBuilderPresenter } from '../resume-builder-presenter/resume-builder-presenter.service';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ResumeDetails } from '../../resume-detail.model';

@Component({
  selector: 'resume-builder-presentation-ui',
  templateUrl: './resume-builder-presentation.component.html',
  styleUrls: ['./resume-builder-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [ResumeBuilderPresenter]
})
export class ResumeBuilderPresentationComponent implements OnInit {

  @Input() public set cities(value: string[]) {
    if (value) {
      this._cities = value;
    }
  }

  public get cities() {
    return this._cities;
  }

  @Input() public set states(value: string[]) {
    if (value) {
      this._states = value;
    }
  }

  public get states() {
    return this._states;
  }

  @Output()
  public saveResumeDetails: EventEmitter<ResumeDetails>;

  public resumeForm: FormGroup;

  private _cities: string[];
  private _states: string[];

  constructor(private resumeBuilderPresenter: ResumeBuilderPresenter) {
    this.saveResumeDetails = new EventEmitter<ResumeDetails>();
  }

  ngOnInit() {
    this.resumeForm = this.resumeBuilderPresenter.buildForm();

    this.resumeBuilderPresenter.saveResumeDetails$.subscribe((resumeDetails: ResumeDetails) => {
      this.saveResumeDetails.emit(resumeDetails);
    });

    this.resumeForm.patchValue({
      fullName:'Nurali K',
      email:'nur@g.com',
      gender:'m',
      contact:'1234',
      address:'aaaaaa',
      
    })

    this.resumeForm.valueChanges.subscribe(x => console.log(this.resumeForm));
  }

  public addEducation() {
    this.resumeBuilderPresenter.addEducation(this.education);
  }

  public removeEducation() {
    this.education.removeAt(this.education.length - 1);
  }
  public addExperience() {
    this.resumeBuilderPresenter.addExperience(this.experience);
  }

  public removeExperience() {
    this.experience.removeAt(this.experience.length - 1);
  }

  public get fullName() {
    return this.resumeForm.get('fullName') as FormControl;
  }
  public get email() {
    return this.resumeForm.get('email') as FormControl;
  }
  public get address() {
    return this.resumeForm.get('address') as FormControl;
  }
  public get contact() {
    return this.resumeForm.get('contact') as FormControl;
  }

  public get education() {
    return this.resumeForm.get('education') as FormArray;
  }

  public get experience() {
    return this.resumeForm.get('experience') as FormArray;
  }

  public get state() {
    return this.resumeForm.get('state') as FormControl;
  }

  public get gender() {
    return this.resumeForm.get('gender') as FormControl;
  }

  public saveResume() {
    this.resumeBuilderPresenter.saveResume(this.resumeForm);
  }

  public resetForm() {
    this.resumeForm.reset();
  }

}
