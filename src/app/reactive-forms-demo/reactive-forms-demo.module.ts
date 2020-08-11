import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Lab1customerComponent } from './lab1customer/lab1customer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [Lab1customerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component:Lab1customerComponent
      }
    ])
  ]
})
export class ReactiveFormsDemoModule { }
