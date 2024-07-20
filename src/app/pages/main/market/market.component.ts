import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuContent, MatMenuItem } from '@angular/material/menu';
import { MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { IndexesComponent } from './indexes/indexes.component';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [
    MatMenu,
    MatMenuItem,
    MatMenuContent,
    MatButton,
    MatTabGroup,
    MatTab,
    MatTabNav,
    MatTabLink,
    MatTabNavPanel,
    RouterOutlet,
    IndexesComponent,
  ],
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss'
})
export class MarketComponent {

  links = ['Índices', 'Ações do Brasil', 'Ações Mundiais', 'Cripto', 'Títulos do Governo', 'Economia'];
  activeLink = this.links[1];
}
