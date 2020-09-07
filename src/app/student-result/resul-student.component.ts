import { Component, OnInit } from '@angular/core';
import { ISemesterResultMarks } from './istudent-result';
import { StudentResultDataService } from './student-result-data.service';

@Component({
  selector: 'app-resul-student',
  templateUrl: './resul-student.component.html',
  styleUrls: ['./resul-student.component.css']
})
export class ResulStudentComponent implements OnInit {
  semesterResultMarks: ISemesterResultMarks[];
  constructor(private studentResultDataService:StudentResultDataService) { }

  ngOnInit(): void {
    this.semesterResultMarks= this.studentResultDataService.getSemesterResultMarksArray();
    console.log(this.semesterResultMarks);
  }
  print(){
    window.print();
  }

}
