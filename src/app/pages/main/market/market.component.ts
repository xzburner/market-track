import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuContent, MatMenuItem } from '@angular/material/menu';
import { MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { PrincipalChartComponent } from '../../../components/principal-chart/principal-chart.component';
import { TrackModel } from '../../../models/track.model';

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
  styleUrl: './market.component.scss',
})
export class MarketComponent implements OnInit {

  constructor() {}

  public indexes: WritableSignal<TrackModel[]> = signal([
      {
        symbol: '^BVSP',
        title: 'IBovespa',
        logo: 'asstes/logos/ibovespa.png',
      },
    ],
  );

  public ngOnInit() {
    console.log(this.indexes);
  }

  public links = ['Índices', 'Ações do Brasil', 'Ações Mundiais', 'Cripto', 'Títulos do Governo', 'Economia'];
  public title = signal(this.links[0]);
}
