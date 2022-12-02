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
    semester: number;
    maxScore: number;
    courseTitle: string;
    courseCode: string;
    teacherAssignedCoursesID: number;
    dateAdded: Date | string;
    userID: string;
    userName: string;
    assessmentTypes: AssessmentTypes;
    applicationUser: ApplicationUser;
    examResults: ExamResults[];
    teacherAssignedCourses: TeacherAssignedCourses;
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
    isActive: boolean;
    subClass: string;
    mainName: string;
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
export interface Courses {
    coursesID: number;
    courseCode: string;
    courseTitle: string;
    programsID: number;
    isActive: boolean;
    selected: boolean;
    programs: Programs;
    // attendances: Attendances[];
    // lectures: Lectures[];
    classSemesterCourses: ClassSemestersCourses[];
}
export interface ClassSemestersCourses {
    classSemesterCoursesID: number;
    coursesID: number;
    courseCode: string;
    courseTitle: string;
    semester: number;
    className: string;
    mainName: string;
    classesID: string;
    classSemestersID: number;
    isActive: boolean;
    classSemesters: ClassSemesters;
    teacherAssignedCourses: TeacherAssignedCourses[];
}
export interface TeacherAssignedCourses {
    teacherAssignedCoursesID: number;
    classSemesterCoursesID: number;
    userID: string;
    userName: string;
    isActive: boolean;
    courseCode: string;
    coursesID: number;
    classesID: number;
    semester: number;
    courseTitle: string;
    className: string;
    dateAdded: Date | string;
    assigner: string;
    teacherName: string;
    applicationUser: ApplicationUser;
    classSemestersCourses: ClassSemestersCourses;
}
export interface TeacherCourseClassVm {
    semester: number;
    classesID: number;
    programsID: number;
    className: string;
    courseTitle: string;
    courseCode: string;
    teacherAssignedCoursesID: number;
    coursesID: number;
}
