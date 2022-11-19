/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Classes, ProgramTypes } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bs-class-home',
  templateUrl: './class-home.component.html',
  styleUrls: ['./class-home.component.scss']
})
export class ClassHomeComponent implements OnInit {

  cls: Classes;
  types: ProgramTypes[];
  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private toast: ToastrService,
    private conf: ConfirmDialogService) {
    title.setTitle('Class report');
    this.cls = route.snapshot.data.class;
    this.types = route.snapshot.data.types;
  }

  ngOnInit(): void {
  }

}
