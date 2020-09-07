import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultSubjectsComponent } from './result-subjects.component';
import { ResultHeaderComponent } from './result-header.component';
import {  RouterModule } from '@angular/router';
import { ResulSubjectListComponent } from './resul-subject-list.component';
import { ResulStudentComponent } from './resul-student.component';



@NgModule({
  declarations: [ResultSubjectsComponent, ResultHeaderComponent, ResulSubjectListComponent, ResulStudentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'result',
        component:ResultHeaderComponent
      },
      {
        path:'resultsubject',
        component:ResulSubjectListComponent
      },
      {
        path:'resultstudent',
        component:ResulStudentComponent
      }
    ])
  ]
})
export class StudentResultModule { }
