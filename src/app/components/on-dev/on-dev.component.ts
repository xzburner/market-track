import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-on-dev',
  standalone: true,
  imports: [
    MatDialogContent,
    MatButton,
    MatDialogClose,
    MatDialogActions,
    MatDialogTitle,
  ],
  templateUrl: './on-dev.component.html',
  styleUrl: './on-dev.component.scss'
})
export class OnDevComponent {

}
