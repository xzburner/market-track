import { Component, input, Input, output, signal } from '@angular/core';

@Component({
  selector: 'app-principal-chart',
  standalone: true,
  imports: [],
  templateUrl: './principal-chart.component.html',
  styleUrl: './principal-chart.component.scss'
})
export class PrincipalChartComponent {

  title = input();
 }
