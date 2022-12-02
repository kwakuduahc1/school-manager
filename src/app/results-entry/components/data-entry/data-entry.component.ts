/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClassAssessments, Classes, ProgramTypes, ResultsVM, Students } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ResultsHttpService } from '../../results-http-service';

@Component({
  selector: 'bs-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {

  stds: Students[];
  results: ResultsVM[] = [];
  form: FormGroup;
  sch: ClassAssessments;
  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private toast: ToastrService,
    private http: ResultsHttpService,
    private conf: ConfirmDialogService) {
    title.setTitle('Home');
    this.stds = route.snapshot.data.students;
    this.sch = route.snapshot.data.sch;
    this.form = new FormGroup({
      std: new FormControl<Students>(null, Validators.compose([Validators.required])),
      score: new FormControl<number>(null, Validators.compose([Validators.required, Validators.max(this.sch.maxScore)]))
    });
  }

  ngOnInit(): void { }

  save(score: ScoresVM) {
    if (this.results.some(f => f.studentsID === score.std.studentsID)) {
      this.toast.error(`You have already added a score for ${score.std.fullName}`);
    }
    else {
      this.results.push({
        fullName: score.std.fullName,
        indexNumber: score.std.indexNumber,
        studentsID: score.std.studentsID,
        score: score.score,
        examID: this.sch.assessmentsID
      });
      this.form.reset();
      const elem = document.getElementById('std');
      elem.focus();
    }
  }

  addScore() {
    this.conf.confirm(`Do you want to save the scores`).subscribe((ans: boolean) => {
      if (ans) {
        this.http.add(this.results).subscribe(() => {
          this.toast.success('The results were submitted');
          this.results.splice(0, this.results.length);
        });
      }
    });
  }

  remove(s: ResultsVM) {
    this.conf.confirm(`Do you want to remove this entry?`).subscribe((ans: boolean) => {
      if (ans) {
        const ix = this.results.findIndex(x => x.studentsID === s.studentsID);
        if (ix >= 0) {
          this.results.splice(ix, 1);
          this.toast.success('The entry was removed');
        }
        else {
          this.toast.info('Invalid state. Refresh the page and try again');
        }
      }
    });
  }
}

export interface ScoresVM {
  std: Students;
  score: number;
}
