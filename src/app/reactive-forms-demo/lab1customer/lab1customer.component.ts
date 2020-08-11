import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-lab1customer',
  templateUrl: './lab1customer.component.html',
  styleUrls: ['./lab1customer.component.css']
})
export class Lab1customerComponent implements OnInit {
customerForm:FormGroup;
customer:Customer=new Customer();
  constructor() { }

  ngOnInit(): void {
    this.customerForm=new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl(),
      isAvailable: new FormControl(true),
      addressType: new FormControl()
    });
  }
  save():void{
    
    /*To determine form has valid state */
    console.log('customerForm.valid: '+this.customerForm.valid);
    /*To access properties of particular control*/
    /*Option-1*/
    let firstNameContent = this.customerForm.controls.firstName.value;
    console.log('First Name Content '+ firstNameContent);
    console.log('First Name valid '+ this.customerForm.controls.firstName.valid);

    /*Option-1*/
    let firstNameContent1 = this.customerForm.get('firstName').value;
    console.log('First Name Content '+ firstNameContent1);
    
    /*To access content of radio button group addressType*/
    let selectedAddressType = this.customerForm.get('addressType').value;
    console.log('selected address type: ' + selectedAddressType);
    console.log('addressType valid: ' + this.customerForm.get('addressType').valid);

    /* Copy content from Form Model to Data Model and get updated objects */
    const mergedObj = {...this.customer, ...this.customerForm.value};
    console.log('Merged Object: ' +  JSON.stringify(mergedObj));
    console.log(this.customerForm)
    console.log('saved:' + JSON.stringify(this.customerForm.value));
  }
  setValueButtonClick():void{
    this.customerForm.setValue({
      firstName:'Rajesh',
      lastName:'Patel',
      isAvailable:true,
      addressType:'1'
    });
    
  }
  patchValueButtonClick():void{
    this.customerForm.patchValue({
      firstName:'Only First Name Changed using patch value'
    });
  }
}
