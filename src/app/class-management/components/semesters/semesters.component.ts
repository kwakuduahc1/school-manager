/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Classes, ClassSemesters } from '../../../dtos/model';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ClassSemestersHttpService } from '../../classes-semesters-http-service';

@Component({
  selector: 'bs-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.scss']
})
export class SemestersComponent implements OnInit {

  cls: Classes;
  sems: ClassSemesters[];
  constructor(
    title: Title,
    route: ActivatedRoute,
    private conf: ConfirmDialogService,
    private http: ClassSemestersHttpService) {
    title.setTitle('Class management');
    this.cls = route.snapshot.data.class;
    this.sems = route.snapshot.data.sems;
  }

  ngOnInit(): void {
  }

  add() {
    this.http.add(this.cls).subscribe(res => {
      this.sems.unshift(res);
    });
  }

  deactivate(cs: ClassSemesters) {
    this.conf.confirm('This will inactivate the semester').subscribe((ans: boolean) => {
      if (ans) {
        this.http.delete(this.cls).subscribe(res => {
          const ix = this.sems.findIndex(x => x.classSemestersID === cs.classSemestersID);
          this.sems.splice(ix, 1);
        });
      }
    });
  }

}
