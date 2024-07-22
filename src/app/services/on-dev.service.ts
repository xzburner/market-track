import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OnDevComponent } from '../components/on-dev/on-dev.component';

@Injectable({
  providedIn: 'root'
})
export class OnDevService {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(OnDevComponent, {
    });
  }
}
