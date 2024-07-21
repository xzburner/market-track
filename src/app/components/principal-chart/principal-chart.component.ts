import { Component, Input, input, InputSignal, OnInit, signal } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
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
  styleUrl: './principal-chart.component.scss'
})
export class PrincipalChartComponent implements OnInit {

  constructor(
    private yahooFinanceService: YahooFinanceService,
  ) {}

  public values: InputSignal<TrackModel[]> = input.required();
  public title = input.required();
  public chartOptions = signal({});

  public ngOnInit() {
    this.getCompleteHistoric();
    console.log(this.values);
  }

  getCompleteHistoric() {
    this.yahooFinanceService.getHistoricalData('^BVSP', '2020-01-01', '2023-07-01').subscribe({
      next: data => {
        const dataPoints = data.chart.result[0].timestamp.map((timestamp: number, index: number) => ({
          x: new Date(timestamp * 1000),
          y: data.chart.result[0].indicators.quote[0].close[index]
        }));

        this.renderChart(dataPoints);

      },
      error: err => {
        console.error('Error fetching data', err);
      }
    });
  }

  private renderChart(dataPoints: { x: Date, y: number }[]): void {
    this.chartOptions.update(chart => {
      return {
        theme: "light2",
        animationEnabled: true,
        zoomEnabled: true,
        axisY: {
          gridThickness: 0,
          labelFormatter: (e: any) => {
            var suffixes = ["", "K", "M", "B", "T"];

            var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
            if(order > suffixes.length - 1)
              order = suffixes.length - 1;

            var suffix = suffixes[order];
            return "R$" + (e.value / Math.pow(1000, order)) + suffix;
          }
        },
        axisX: {
          labelFormatter: (e: any) => {
            const date = new Date(e.value);
            const monthNames = [
              "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
              "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
            ];
            return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
          }
        },
        data: [{
          type: "line",
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "R$#,###.##",
          toolTipContent: "{x:dd MMMM yyyy} - {y}",
          dataPoints: dataPoints
        }]
      };
    });
  }
}
