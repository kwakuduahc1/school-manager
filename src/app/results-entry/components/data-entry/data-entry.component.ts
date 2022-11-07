/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionsHttpService } from '../../../class-subscriptions/subscription-http-service';
import { ResultsVM, Students } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';

@Component({
  selector: 'bs-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {

  stds: Students[];
  results: ResultsVM[] = [];
  form: FormGroup;
  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private toast: ToastrService,
    private http: SubscriptionsHttpService,
    private conf: ConfirmDialogService) {
    title.setTitle('Home');
    this.stds = route.snapshot.data.students;
    this.form = new FormGroup({
      std: new FormControl<Students>(null, Validators.compose([Validators.required])),
      score: new FormControl<number>(null, Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
  }

  save(score: ScoresVM) {
    this.results.push({
      fullName: score.std.fullName,
      indexNumber: score.std.indexNumber,
      studentsID: score.std.studentsID,
      score: score.score
    } as unknown as ResultsVM);
  }
}

export interface ScoresVM {
  std: Students;
  score: number;
}
