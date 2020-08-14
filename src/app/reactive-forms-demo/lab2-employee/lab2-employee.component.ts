import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee, Skill } from '../employee';


@Component({
  selector: 'app-lab2-employee',
  templateUrl: './lab2-employee.component.html',
  styleUrls: ['./lab2-employee.component.css']
})
export class Lab2EmployeeComponent implements OnInit {
employeeForm:FormGroup;
employee:Employee= new Employee();
skillsData:Skill[];
  constructor() { }

  ngOnInit(): void {
    this.employeeForm= new FormGroup({
      empno:new FormControl(),
      ename:new FormControl(),
      job:new FormControl(),
      mgr:new FormControl(),
      hiredate:new FormControl('2020-08-04'),  //YYYY-MM-DD
      email:new FormControl(),
      sal:new FormControl(),
      comm:new FormControl(),
      deptno:new FormControl(),
      skills:new FormControl()
    });
    this.skillsData = this.getSkills();
   
  }
  getSkills():Skill[]{
    let objSkills:Skill[] = [];
   
    objSkills.push({id:101,name:'Python'});
    objSkills.push({id:102,name:'C Language'});
    objSkills.push({id:103,name:'C#'});
    objSkills.push({id:104,name:'HTML'});
    return objSkills;
  }
  // changeSkill(event):void{
  //   console.log('changeSkill event:' + JSON.stringify(event));
    
  // }
  save():void{
    //console.log('selected skills: ' + this.employeeForm.get('skills').value);
    console.log('Is Valid'+ this.employeeForm.valid);
    console.log('employee form model: ' + JSON.stringify( this.employeeForm.value));
  }

}
