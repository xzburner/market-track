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
export class MarketComponent {

  constructor() {}

  public indexes: WritableSignal<TrackModel[]> = signal([
      {
        symbol: '^BVSP',
        title: 'IBovespa',
        logo: 'assets/logos/ibovespa.png',
        percentChange: 0,
        lastQuote: 0,
      },
      {
        symbol: '^IBX50',
        title: 'IBrx 50',
        logo: 'assets/logos/ibrx-50.png',
        percentChange: 0,
        lastQuote: 0,
      },
    ],
  );

  public BrazilActions: WritableSignal<TrackModel[]> = signal([
      {
        symbol: 'PETR4.SA',
        title: 'Petrobras',
        logo: 'assets/logos/petrobras.png',
        percentChange: 0,
        lastQuote: 0,
      },
      {
        symbol: 'VALE',
        title: 'Vale',
        logo: 'assets/logos/vale.png',
        percentChange: 0,
        lastQuote: 0,
      },
      {
        symbol: 'ITUB',
        title: 'Itaú',
        logo: 'assets/logos/itau.png',
        percentChange: 0,
        lastQuote: 0,
      },
      {
        symbol: 'BBD',
        title: 'Bradesco',
        logo: 'assets/logos/bradesco.png',
        percentChange: 0,
        lastQuote: 0,
      },
      {
        symbol: 'SUZB3.SA',
        title: 'Suzano',
        logo: 'assets/logos/suzano.png',
        percentChange: 0,
        lastQuote: 0,
      },
      {
        symbol: 'ABEV3.SA',
        title: 'Ambev',
        logo: 'assets/logos/ambev.jpg',
        percentChange: 0,
        lastQuote: 0,
      },
    ],
  );

  public links = ['Índices', 'Ações do Brasil', 'Ações Mundiais', 'Cripto', 'Títulos do Governo', 'Economia'];
  public title = signal(this.links[0]);
}
