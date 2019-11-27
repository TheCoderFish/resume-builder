import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatSelectModule, MatStepperModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CdkStepperModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
