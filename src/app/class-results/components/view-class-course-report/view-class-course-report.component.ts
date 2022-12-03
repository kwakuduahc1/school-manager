import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FnClassReport, TACVm } from '../../../dtos/model';
import { PrintProviderService } from '../../../providers/print-provider.service';
import * as xlsx from 'xlsx';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'bs-view-class-course-report',
  templateUrl: './view-class-course-report.component.html',
  styleUrls: ['./view-class-course-report.component.scss']
})
export class ViewClassCourseReportComponent implements OnInit {

  crs: TACVm;
  rpt: FnClassReport[];
  constructor(title: Title, route: ActivatedRoute, private printer: PrintProviderService) {
    title.setTitle('View class report');
    this.rpt = route.snapshot.data.report.res;
    this.crs = route.snapshot.data.report.csc;
  }

  ngOnInit(): void {
  }

  print(){
    // eslint-disable-next-line max-len
    this.printer.print('tbl', `${this.crs.className} ${this.crs.courseTitle} results for semester ${this.crs.semester}`, true, true, true, 500, true, true);
  }

  download() {
    const wb = xlsx.utils.table_to_book(document.getElementById('tbl'));
    /* Export to file (start a download) */
    xlsx.writeFile(wb, `${this.crs.className} ${this.crs.courseTitle} ${this.crs.semester}.xlsx`);
  }
}
