import { Component, OnInit } from '@angular/core';
import { StudentResultDataService } from './student-result-data.service';
import { ISemesterResult } from './istudent-result';

@Component({
  selector: 'app-result-header',
  templateUrl: './result-header.component.html',
  styleUrls: ['./result-header.component.css']
})
export class ResultHeaderComponent implements OnInit {
semesterResults:ISemesterResult[];
  constructor(private studentResultDataService:StudentResultDataService) { }

  ngOnInit(): void {
    this.semesterResults = this.studentResultDataService.getSemesterResults();
   // console.log('parent: ' +JSON.stringify( this.semesterResults));
  }
  print():void{
    window.print();
  }
}
