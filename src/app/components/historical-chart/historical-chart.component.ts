import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-historical-chart',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div class="chart-container">
      <h3>Historique des disponibilités</h3>
      <div class="chart">
        <canvas baseChart
          [type]="'line'"
          [data]="chartData"
          [options]="chartOptions">
        </canvas>
      </div>
    </div>
  `,
  styles: [`
    .chart-container {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: white;
    }
    .chart {
      height: 300px;
    }
  `]
})
export class HistoricalChartComponent {
  @Input() data: any;

  get chartData() {
    return {
      labels: this.data?.labels,
      datasets: [
        {
          label: 'Disponibilité administrative',
          data: this.data?.adminData,
          borderColor: '#3F51B5',
          backgroundColor: 'rgba(63, 81, 181, 0.1)',
          tension: 0.3,
          fill: true
        },
        {
          label: 'Disponibilité mécanique',
          data: this.data?.mechData,
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          tension: 0.3,
          fill: true
        }
      ]
    };
  }

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 70,
        max: 100
      }
    }
  };
}