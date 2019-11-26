import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { ResumeBuilderContainerComponent } from './resume-builder-container/resume-builder-container.component';
import { ResumeBuilderPresentationComponent } from './resume-builder-container/resume-builder-presentation/resume-builder-presentation.component';
import { ResumeBuilderService } from './resume-builder.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DisplayResumePresentationComponent } from './resume-builder-container/resume-builder-presentation/display-resume-presentation/display-resume-presentation.component';
@NgModule({
  declarations: [ResumeBuilderContainerComponent, ResumeBuilderPresentationComponent, DisplayResumePresentationComponent],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ResumeBuilderService
  ]
})
export class ResumeBuilderModule { }
