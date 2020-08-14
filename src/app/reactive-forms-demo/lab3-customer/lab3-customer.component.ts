import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lab3-customer',
  templateUrl: './lab3-customer.component.html',
  styleUrls: ['./lab3-customer.component.css']
})
export class Lab3CustomerComponent implements OnInit {
customer:Customer= new Customer();
customerForm: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.customerForm= this.formBuilder.group({
      firstName:'',
      lastName: '',
      isAvailable:true,
      addressType:''
    });
   }

  ngOnInit(): void {
  }
  save():void{
    console.log('method : save()');
    console.log('form model: ' + JSON.stringify(this.customerForm.value));
    console.log('valid: ' + this.customerForm.valid);
  }
}
