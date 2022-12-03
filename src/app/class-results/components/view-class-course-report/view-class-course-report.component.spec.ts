import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassCourseReportComponent } from './view-class-course-report.component';

describe('ViewClassCourseReportComponent', () => {
  let component: ViewClassCourseReportComponent;
  let fixture: ComponentFixture<ViewClassCourseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClassCourseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewClassCourseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
