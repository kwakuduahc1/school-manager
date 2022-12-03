/* eslint-disable max-len */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ClassAssessments, ClassReportVM, ResultsVM, TACVm } from '../../../dtos/model';
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

  results: ResultsVM[];
  course: ClassAssessments;
  modalRef!: BsModalRef;
  std!: ResultsVM;
  form!: FormGroup;
  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private printer: PrintProviderService,
    private toast: ToastrService,
    private modalService: BsModalService,
    private http: ResultsHttpService,
    private conf: ConfirmDialogService) {
    this.results = route.snapshot.data.results;
    this.course = route.snapshot.data.course;
    title.setTitle(`${this.course.examName} results`);
  }

  print() {
    this.printer.print('print', `${this.course.className} ${this.course.courseTitle} semester ${this.course.semester} results for `, true, true, true, 500, true);
  }
  ngOnInit(): void { }

  openModal(ca: ResultsVM, template: TemplateRef<any>) {
    this.std = ca;
    this.form = new FormGroup({
      score: new FormControl<number>(ca.score, Validators.compose([Validators.required, Validators.min(0), Validators.max(this.course.maxScore)]))
    });
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  save(score: number) {
    this.conf.confirm(`Do you wish to edit the scores?`).subscribe((ans: boolean) => {
      if (ans) {
        this.std.score = score;
        this.http.edit(this.std).subscribe(() => {
          this.toast.success('The scores were updated');
          this.modalRef.hide();
        });
      }
    });
  }
}
