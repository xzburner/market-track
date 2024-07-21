import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, input, InputSignal, OnInit, output } from '@angular/core';
import { TrackModel } from '../../../models/track.model';
import { YahooFinanceService } from '../../../services/yahoo-finance.service';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    PercentPipe,
    CurrencyPipe,
  ],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent implements OnInit {

  item: InputSignal<TrackModel> = input.required();
  activeItem: InputSignal<string> = input.required();
  selectedItem = output();

  constructor(private readonly yahooFinanceService: YahooFinanceService) {}

  public ngOnInit() {
    this.getLastQuote();
  }

  getLastQuote(): void {
    const now = new Date();
    const endDate = now.toISOString().split('T')[0];
    const pastDate = new Date();
    pastDate.setMonth(now.getMonth() - 1);
    const startDate = pastDate.toISOString().split('T')[0];

    this.yahooFinanceService.getHistoricalData(this.item().symbol, startDate, endDate).subscribe({
      next: data => {
        const timestamps = data.chart.result[0].timestamp;
        const closePrices = data.chart.result[0].indicators.quote[0].close;

        if (timestamps.length < 2) {
          console.warn('Não há dados suficientes para calcular a variação.');
          return;
        }

        const latestIndex = timestamps.length - 1;
        const previousQuote = closePrices[latestIndex - 1];
        this.item().lastQuote = data.chart.result[0].meta.regularMarketPrice;

        const item = this.item();

        if (item && item.lastQuote !== undefined && previousQuote !== undefined) {
          item.percentChange = Number(
            (((item.lastQuote - previousQuote) / previousQuote) * 100).toFixed(2)
          );
        }
      },
      error: err => {
        console.error('Erro ao buscar dados', err);
      },
    });
  }
}
