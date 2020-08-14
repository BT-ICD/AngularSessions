import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Lab1customerComponent } from './lab1customer/lab1customer.component';
import { RouterModule } from '@angular/router';
import { Lab2EmployeeComponent } from './lab2-employee/lab2-employee.component';



@NgModule({
  declarations: [Lab1customerComponent, Lab2EmployeeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component:Lab1customerComponent
      },
      {
        path:'lab2',
        component:Lab2EmployeeComponent
      }
    ])
  ]
})
export class ReactiveFormsDemoModule { }
