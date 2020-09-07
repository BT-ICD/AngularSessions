import { Component, OnInit, Input } from '@angular/core';
import { StudentResultDataService } from './student-result-data.service';
import { ISemesterResultMarks } from './istudent-result';

@Component({
  selector: 'app-resul-subject-list',
  templateUrl: './resul-subject-list.component.html',
  styleUrls: ['./resul-subject-list.component.css']
})
export class ResulSubjectListComponent implements OnInit {
@Input() semesterResultMarks:ISemesterResultMarks;
  constructor(private studentResultDataService:StudentResultDataService) { }

  ngOnInit(): void {
    // Following lines commented to get data from parent instead of directly from service
   // this.semesterResultMarks = this.studentResultDataService.getSemesterResultMarks();
    //console.log(this.semesterResultMarks);
  }

}
