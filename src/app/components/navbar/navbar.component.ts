import { Component, signal } from '@angular/core';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatIcon,
    MatIconButton,
    MatFabButton,
    MatMiniFabButton,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private readonly route: Router) {}

  public page = signal('market');

  navigateByUrl(page: string) {
    this.route.navigateByUrl(page);
    this.page.set(page);
  }
}
