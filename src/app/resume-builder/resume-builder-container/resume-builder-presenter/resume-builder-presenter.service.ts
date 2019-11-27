import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { ResumeDetails } from '../../resume-detail.model';

@Injectable()
export class ResumeBuilderPresenter {

  private saveResumeDetails: Subject<any>;
  public saveResumeDetails$: Observable<any>;

  constructor(private fb: FormBuilder) {
    this.saveResumeDetails = new Subject<any>();
    this.saveResumeDetails$ = this.saveResumeDetails.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required, Validators.maxLength(250)]],
      gender: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: [''],
      education: this.fb.array([]),
      skills: [''],
      experience: this.fb.array([]),
      coverLetter: ['']
    });
  }

  public getEducationForm() {
    return this.fb.group({
      qualification: [''],
      instituion: [''],
      passingYear: ['', [Validators.pattern('^[12][0-9]{3}$')]]
    })
  }

  public getExperienceForm() {
    return this.fb.group({
      company: [''],
      description: ['']
    })
  }


  public addEducation(educationDetails: FormArray) {
    educationDetails.push(this.getEducationForm());
  }

  public addExperience(experienceDetails: FormArray) {
    experienceDetails.push(this.getExperienceForm());
  }

  public saveResume(form: FormGroup) {
    if (form.valid) {
      let resumeDetails: ResumeDetails = new ResumeDetails();
      resumeDetails = form.getRawValue();
      this.saveResumeDetails.next(resumeDetails);
    }
  }
}
