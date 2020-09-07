export interface IStudentResult {
    
}
export interface ISemesterResult{
    semesterName:string,
    examYear:string,
    seatNumber:string,
    resultdData:IResultSubject[];
}
export interface IResultSubject{
resDataId:number,    
subjectId:number,
subject:string,
theoryObtain:string,
theoryFrom:string,
internalObtain:string,
internalFrom:string,
totalObtain:string,
totalFrom:string
}
export interface ISemesterResultMarks{
    semesterName:string,
    examYear:string,
    seatNumber:string,
    resultdData:IResultSubjectMarks[],
    resultClass:string,
    status:string

}
export interface IResultSubjectMarks{
    resDataId:number,    
    subjectId:number,
    subject:string,
    marks:IMarks[]
    total:string,
    grade:string
    }
export interface IMarks{
    max:string,
    min:string,
    obtain:string
}
