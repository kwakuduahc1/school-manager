import { Injectable } from '@angular/core';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
    constructor(private modalService: BsModalService) {
    };

    confirm(msg: string) {
        ConfirmationComponent.prototype.msg = msg
        return this.modalService.show(ConfirmationComponent).content?.onClose;
    }
}