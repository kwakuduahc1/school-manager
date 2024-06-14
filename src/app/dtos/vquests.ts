/* eslint-disable no-underscore-dangle */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Injectable } from '@angular/core';

import { ElectronService } from 'ngx-electron';
import { catchError, Observable, of } from 'rxjs/';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}

@Injectable()
export class AppService {
    constructor(private _electronService: ElectronService) { }

    getItems() {
        return of(this._electronService.ipcRenderer.sendSync('get-items')).pipe(
            catchError((error, caught) => caught)
        );
    }

    addItem(item: Item) {
        return of(
            this._electronService.ipcRenderer.sendSync('add-item', item)
        ).pipe(catchError((error: any) => (error.json)));
    }

    deleteItem(item: Item): Observable<Item[]> {
        return of(
            this._electronService.ipcRenderer.sendSync('delete-item', item)
        ).pipe(catchError((error, caugth) => caugth));
    }
}
