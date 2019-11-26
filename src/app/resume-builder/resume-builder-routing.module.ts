import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeBuilderContainerComponent } from './resume-builder-container/resume-builder-container.component';

const routes: Routes = [
  { path: '', component: ResumeBuilderContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
