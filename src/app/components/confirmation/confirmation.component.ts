import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  onClose: Subject<boolean>;
  msg!: string;
  constructor(private bsModalRef: BsModalRef) {
    this.onClose = new Subject();
  }

  public ngOnInit(): void {
  }

  public close(state: boolean): void {
    this.onClose.next(state);
    this.bsModalRef.hide();
  }
}