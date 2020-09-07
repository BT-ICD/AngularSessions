import { Injectable } from '@angular/core';
import { IResultSubject, ISemesterResult, ISemesterResultMarks } from './istudent-result';

@Injectable({
  providedIn: 'root'
})
export class StudentResultDataService {

  constructor() { }
  getStudentResult():IResultSubject[]{
    let resultSubjects:IResultSubject[]=
    [
      {'resDataId':101, 'subjectId':1,'subject':'C Language','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100'  },
      {'resDataId':101, 'subjectId':2,'subject':'HTML','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100'  }
    ]
    return resultSubjects;
  }
getSemesterResults():ISemesterResult[]{
  let semesterResults:ISemesterResult[]=
    [
      {'semesterName':'Semester 01','examYear':'Mar-2018','seatNumber':'0101010','resultdData':[
        {'resDataId':101, 'subjectId':1,'subject':'C Language','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100' },
        {'resDataId':101, 'subjectId':2,'subject':'HTML','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100'  }
      ]
      },
      {'semesterName':'Semester 02','examYear':'Oct-2018','seatNumber':'0201010','resultdData':[
        {'resDataId':101, 'subjectId':1,'subject':'C++','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100' },
        {'resDataId':101, 'subjectId':2,'subject':'JavaScript','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100'  }
      ]
      },
      {'semesterName':'Semester 03','examYear':'Mar-2019','seatNumber':'0301010','resultdData':[
        {'resDataId':101, 'subjectId':1,'subject':'JAVA','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100' },
        {'resDataId':101, 'subjectId':2,'subject':'.NET','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100'  }
      ]
      },
      {'semesterName':'Semester 04','examYear':'Oct-2019','seatNumber':'0401010','resultdData':[
        {'resDataId':101, 'subjectId':1,'subject':'Database','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100' },
        {'resDataId':101, 'subjectId':2,'subject':'NO SQL','theoryObtain':'50','theoryFrom':'70','internalObtain':'20' , 'internalFrom':'30','totalObtain':'70', 'totalFrom':'100'  }
      ]
      }
    ]
    return semesterResults;
  }
  getSemesterResultMarks():ISemesterResultMarks{
    let semesterResultMarks:ISemesterResultMarks={
      'semesterName':'Semster - 01',
      'examYear':'Mar-2020',
      'seatNumber':'1010101',
      'resultClass':'First class',
      'status':'Pass',
      'resultdData':[
          {'resDataId':101,'subjectId':1,'subject':'C Language','total':'70','grade':'A',
            marks:[
            {'max':'70','min':'28','obtain':'50'},
            {'max':'30','min':'12','obtain':'20'}
            ]
          },
          {'resDataId':101,'subjectId':2,'subject':'HTML','total':'78','grade':'A+',
            marks:[
            {'max':'70','min':'28','obtain':'60'},
            {'max':'30','min':'12','obtain':'18'}
            ]
          }
        ]
    }
    return semesterResultMarks;
  }
  getSemesterResultMarksArray():ISemesterResultMarks[]{
    let semesterResultMarks:ISemesterResultMarks[]=[
      {
        'semesterName':'Semester-01',
        'examYear':'Mar-2019',
        'seatNumber':'1010101',
        'resultClass':'First class',
        'status':'Pass',
        'resultdData':[
            {'resDataId':101,'subjectId':1,'subject':'C Language','total':'70','grade':'A',
              marks:[
              {'max':'70','min':'28','obtain':'50'},
              {'max':'30','min':'12','obtain':'20'}
              ]
            },
            {'resDataId':101,'subjectId':2,'subject':'HTML','total':'78','grade':'A+',
              marks:[
              {'max':'70','min':'28','obtain':'60'},
              {'max':'30','min':'12','obtain':'18'}
              ]
            }
          ]
      },
      {
        'semesterName':'Semester-02',
        'examYear':'Oct-2019',
        'seatNumber':'2010101',
        'resultClass':'First class',
        'status':'Pass',
        'resultdData':[
            {'resDataId':102,'subjectId':3,'subject':'C++','total':'70','grade':'B',
              marks:[
              {'max':'70','min':'28','obtain':'50'},
              {'max':'30','min':'12','obtain':'20'}
              ]
            },
            {'resDataId':102,'subjectId':4,'subject':'JavaScript','total':'70','grade':'B+',
              marks:[
              {'max':'70','min':'28','obtain':'60'},
              {'max':'30','min':'12','obtain':'18'}
              ]
            }
          ]
      }
    ]
    return semesterResultMarks;
  }
  
}


// subject:string,
// theoryObtain:string,
// theoryFrom:string,
// internalObtain:string,
// internalFrom:string,
// totalObtain:string,
// totalFrom:string