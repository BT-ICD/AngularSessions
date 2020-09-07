import { Component, OnInit, Input } from '@angular/core';
import { StudentResultDataService } from './student-result-data.service';
import { IResultSubject, ISemesterResult } from './istudent-result';

@Component({
  selector: 'app-result-subjects',
  templateUrl: './result-subjects.component.html',
  styleUrls: ['./result-subjects.component.css']
})
export class ResultSubjectsComponent implements OnInit {
// resultSubject:IResultSubject[];
@Input() semesterResult:ISemesterResult;

  constructor(private studentResultDataService:StudentResultDataService) { }

  ngOnInit(): void {
    // this.resultSubject = this.studentResultDataService.getStudentResult();
    // console.log(this.resultSubject);
    //this.semesterResults = this.studentResultDataService.getSemesterResults();
    //console.log(this.semesterResults);
    //console.log('child: ' +this.semesterResult);
    
  }

}
