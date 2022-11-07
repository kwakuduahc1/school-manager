import { Classes, ApplicationUser } from '../dtos/model';

export interface TeacherClasses {
    teacherClassesID: number;
    userID: string;
    userName: string;
    mainClass: string;
    subClass: string;
    classesID: number;
    isActive: boolean;
    classes: Classes;
    students: number;
    applicationUser: ApplicationUser;
}
