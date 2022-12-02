/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProgramTypes, TeacherCourseClassVm } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';

@Component({
  selector: 'bs-class-home',
  templateUrl: './class-home.component.html',
  styleUrls: ['./class-home.component.scss']
})
export class ClassHomeComponent implements OnInit {

  course: TeacherCourseClassVm;
  types: ProgramTypes[];
  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider) {
    title.setTitle('Course info');
    this.course = route.snapshot.data.types.course;
    this.types = route.snapshot.data.types.types;
  }

  ngOnInit(): void {
  }

}
