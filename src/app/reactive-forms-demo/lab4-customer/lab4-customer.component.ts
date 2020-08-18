import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab4-customer',
  templateUrl: './lab4-customer.component.html',
  styleUrls: ['./lab4-customer.component.css']
})
export class Lab4CustomerComponent implements OnInit {
customer: Customer= new Customer();
customerForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  //Array syntax is used to set formcontrol validation for FormGroup
  ngOnInit(): void {
    this.customerForm= this.formBuilder.group({
      firstName:['Rajesh', Validators.required],
      lastName:['Shah', [Validators.required, Validators.minLength(3)]],
      isAvailable:[true,Validators.required],
      addressType:[null,Validators.required]
    });
    
  }
  save():void{
    console.log('save clicked');
  }

}
