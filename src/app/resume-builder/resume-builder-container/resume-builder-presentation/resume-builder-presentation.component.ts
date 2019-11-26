import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ResumeBuilderPresenter } from '../resume-builder-presenter/resume-builder-presenter.service';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

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
      console.log(this.resumeForm);
    });


    this.resumeForm.patchValue({
      fullName: 'Nurali Khoja',
      email: 'nuralikhoja@gmail.com',
      contact: '1234',
      address: 'Umbergaon Gujarat',
      education: [{}],
      skills: 'programming',
      experience: [{
        qualification: 'X',
        instituion: 'MBBI',
        passingYear: '2011'
      }],
      coverLetter: 'Cover letter'
    });
  }

  public addEducation() {
    const educationDetails: FormArray = this.resumeForm.get('education') as FormArray;
    this.resumeBuilderPresenter.addEducation(educationDetails);
  }

  public removeEducation() {
    this.education.removeAt(this.education.length - 1);
  }
  public addExperience() {
    const experienceDetails: FormArray = this.resumeForm.get('experience') as FormArray;
    this.resumeBuilderPresenter.addExperience(experienceDetails);
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

  public onSubmit() {
    console.log(this.resumeForm.value);
  }

  public resetForm() {
    this.resumeForm.reset();
  }

}
