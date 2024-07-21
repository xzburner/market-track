import { Component, Input, input, InputSignal, OnInit, signal } from '@angular/core';
import { CanvasJS, CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { TrackModel } from '../../models/track.model';
import { YahooFinanceService } from '../../services/yahoo-finance.service';
import { OptionsComponent } from './options/options.component';

@Component({
  selector: 'app-principal-chart',
  standalone: true,
  imports: [
    CanvasJSAngularChartsModule,
    OptionsComponent,
  ],
  templateUrl: './principal-chart.component.html',
  styleUrl: './principal-chart.component.scss',
})
export class PrincipalChartComponent implements OnInit {

  constructor(
    private yahooFinanceService: YahooFinanceService,
  ) {}

  public values: InputSignal<TrackModel[]> = input.required();
  public title = input.required();
  public activeSymbol = '';

  public ngOnInit() {
    this.getCompleteHistoric(this.values()[0].symbol);
  }

  getCompleteHistoric(symbol: string) {
    this.activeSymbol = symbol;
    const now = new Date();
    const endDate = now.toISOString().split('T')[0];
    this.yahooFinanceService.getHistoricalData(symbol, '2023-01-01', endDate).subscribe({
      next: data => {
        console.log(data);
        const dataPoints = data.chart.result[0].timestamp.map((timestamp: number, index: number) => ({
          x: new Date(timestamp * 1000),
          y: data.chart.result[0].indicators.quote[0].close[index],
        }));

        this.renderChart(dataPoints);

      },
      error: err => {
        console.error('Error fetching data', err);
      },
    });
  }

  private renderChart(dataPoints: { x: Date, y: number }[]): void {
    const lastValue = dataPoints[dataPoints.length - 1].y;
    const previousValue = dataPoints.length > 1 ? dataPoints[dataPoints.length - 2].y : lastValue;
    const lineColor = lastValue >= previousValue ? '#089981' : '#f23645'; // Green if positive, red if negative

    const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      animationEnabled: true,
      zoomEnabled: true,
      axisY: {
        gridThickness: 0,
        labelFormatter: (e: any) => {
          var suffixes = ['', 'K', 'M', 'B', 'T'];

          var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
          if (order > suffixes.length - 1)
            order = suffixes.length - 1;

          var suffix = suffixes[order];
          return 'R$' + (e.value / Math.pow(1000, order)) + suffix;
        },
      },
      axisX: {
        labelFormatter: (e: any) => {
          const date = new Date(e.value);
          const monthNames = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
          ];
          return `${ monthNames[date.getMonth()] } ${ date.getFullYear() }`;
        },
      },
      data: [{
        type: "area",
        color: lineColor,
        lineColor: lineColor,
        fillOpacity: 0.5,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: 'R$#,###.##',
        toolTipContent: '{x} - {y}',
        dataPoints: dataPoints,
      }],
    });
    chart.render();
  }
}
