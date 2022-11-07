export interface AssessmentTypes {
    typesID: number;
    typeName: string;
    classAssessments: ClassAssessments[];
}
export interface ProgramTypes {
    programsTypesID: number;
    typesID: number;
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
}
export interface ClassAssessments {
    assessmentsID: number;
    typesID: number;
    classesID: number;
    examName: string;
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
export interface ResultsVM {
    indexNumber: string;
    fullName: string;
    score: number;
    examID: number;
    studentsID: number;
}

export interface Students {
    studentsID: number;
    fullName: string;
    indexNumber: string;
}
