import { IUsers } from './IUsers';

export interface AssessmentTypes {
    typesID: number;
    typeName: string;
    classAssessments: ClassAssessments[];
}
export interface ProgramTypes {
    programsTypesID: number;
    typesID: number;
    typeName: string;
    programsID: number;
    weight: number;
    programCode: string;
    programTitle: string;
    assessmentTypes: AssessmentTypes;
}
export interface Semesters {
    semestersID: number;
    semester: number;
}
export interface ApplicationUser {
    id: string;
    userName: string;
}
export interface Programs {
    programsID: number;
    programCode: string;
    programTitle: string;
    classes: Classes[];
}
export interface Classes {
    classesID: number;
    subClass: string;
    mainName: string;
    programCode: string;
    programTitle: string;
    isActive: boolean;
    programsID: number;
    students: Students | number;
    semestersID: number;
}
export interface ClassAssessments {
    assessmentsID: number;
    typesID: number;
    classesID: number;
    examName: string;
    course: string;
    maxScore: number;
    semesterID: number;
    dateAdded: Date | string;
    userID: string;
    userName: string;
    assessmentTypes: AssessmentTypes;
    applicationUser: ApplicationUser;
    classes: Classes;
    semester: number;
    semesters: Semesters;
    examResults: ExamResults[];
}
export interface ExamResults {
    examResultsID: number;
    classAssessmentsID: number;
    studentsID: number;
    score: number;
    classAssessments: ClassAssessments;
    students: Students;
}

export interface ClassSemesters {
    classSemestersID: number;
    classesID: number;
    semestersID: number;
    classes: Classes;
    semesters: Semesters;
}

export interface ResultsVM {
    indexNumber: string;
    fullName: string;
    score: number;
    examID: number;
    studentsID: number;
}
export interface ClassReportVM extends ResultsVM {
    assignment: number;
    midSemester: number;
    quizes: number;
    examination: number;
}
export interface Students {
    studentsID: number;
    fullName: string;
    indexNumber: string;
}

export interface Coordinators {
    coordinatorsID: number;
    userID: string;
    programsID: number;
    teacherName: string;
    applicationUser: IUsers;
    programs: Programs;
    fullName: string;
}
