import { Component, signal, Signal } from '@angular/core';
import { createSignal } from '@angular/core/primitives/signals';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuContent, MatMenuItem } from '@angular/material/menu';
import { MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { PrincipalChartComponent } from '../../../components/principal-chart/principal-chart.component';

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
    PrincipalChartComponent,
  ],
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss'
})
export class MarketComponent {

  links = ['Índices', 'Ações do Brasil', 'Ações Mundiais', 'Cripto', 'Títulos do Governo', 'Economia'];
  title = signal(this.links[1]);
}
