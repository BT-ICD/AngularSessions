import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Lab1customerComponent } from './lab1customer/lab1customer.component';
import { RouterModule } from '@angular/router';
import { Lab2EmployeeComponent } from './lab2-employee/lab2-employee.component';
import { Lab3CustomerComponent } from './lab3-customer/lab3-customer.component';
import { Lab4CustomerComponent } from './lab4-customer/lab4-customer.component';



@NgModule({
  declarations: [Lab1customerComponent, Lab2EmployeeComponent, Lab3CustomerComponent, Lab4CustomerComponent],
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
      },
      {
        path:'lab3',
        component:Lab3CustomerComponent
      },
      {
        path:'lab4',
        component:Lab4CustomerComponent
      }
    ])
  ]
})
export class ReactiveFormsDemoModule { }
