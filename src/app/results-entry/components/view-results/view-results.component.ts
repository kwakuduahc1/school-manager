/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClassReportVM, TACVm } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { PrintProviderService } from '../../../providers/print-provider.service';
import { ResultsHttpService } from '../../results-http-service';

@Component({
  selector: 'bs-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss']
})
export class ViewResultsComponent implements OnInit {

  results: ClassReportVM[];
  course: TACVm;
  // form: FormGroup;
  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private printer: PrintProviderService,
    private toast: ToastrService,
    private http: ResultsHttpService,
    private conf: ConfirmDialogService) {
    title.setTitle('Home');
    this.results = route.snapshot.data.results.res;
    this.course = route.snapshot.data.results.tas;
    // this.form = new FormGroup({
    //   std: new FormControl<Students>(null, Validators.compose([Validators.required])),
    //   score: new FormControl<number>(null, Validators.compose([Validators.required, Validators.max(this.tps.maxScore)]))
    // });
  }

  print() {
    // eslint-disable-next-line max-len
    this.printer.print('print', `${this.course.className} ${this.course.courseTitle} semester ${this.course.semester} results for `, true, true, true, 500, true);
  }
  ngOnInit(): void { }
}
