import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { ResumeBuilderContainerComponent } from './resume-builder-container/resume-builder-container.component';
import { ResumeBuilderPresentationComponent } from './resume-builder-container/resume-builder-presentation/resume-builder-presentation.component';
import { ResumeBuilderService } from './resume-builder.service';
@NgModule({
  declarations: [ResumeBuilderContainerComponent, ResumeBuilderPresentationComponent],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    MaterialModule
  ],
  providers: [
    ResumeBuilderService
  ]
})
export class ResumeBuilderModule { }
