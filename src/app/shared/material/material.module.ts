import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

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
    MatSelectModule
  ]
})
export class MaterialModule { }
