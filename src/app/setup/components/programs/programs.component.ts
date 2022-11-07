/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Programs } from '../../../dtos/model';

@Component({
  selector: 'bs-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  programs: Programs[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
