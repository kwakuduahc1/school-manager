/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Classes, ClassReportVM } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { PrintProviderService } from '../../../providers/print-provider.service';
import * as xlsx from 'xlsx';

@Component({
  selector: 'bs-class-report',
  templateUrl: './class-report.component.html',
  styleUrls: ['./class-report.component.scss']
})
export class ClassReportComponent implements OnInit {

  report: ClassReportVM[];
  cls: Classes;
  // form: FormGroup;
  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private printer: PrintProviderService) {
    title.setTitle('Class report');
    this.cls = route.snapshot.data.class;
    this.report = route.snapshot.data.report;
    // this.form = new FormGroup({
    //   std: new FormControl<Students>(null, Validators.compose([Validators.required])),
    //   score: new FormControl<number>(null, Validators.compose([Validators.required, Validators.max(this.tps.maxScore)]))
    // });
  }

  print() {
    this.printer.print('print', `${this.cls.mainName} results`, true, true, true, 500, true);
  }

  download() {
    const wb = xlsx.utils.table_to_book(document.getElementById('print'));
    /* Export to file (start a download) */
    xlsx.writeFile(wb, `${this.cls.subClass}.xlsx`);
  }

  ngOnInit(): void { }
}
