import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Injectable()
export class ResumeBuilderPresenter {

  constructor(private fb: FormBuilder) { }

  public buildForm() {
    return this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required, Validators.maxLength(250)]],
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
}
