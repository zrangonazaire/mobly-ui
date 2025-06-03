import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-availability-gauge',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div class="gauge-container">
      <h3>{{ title }}</h3>
      <div class="gauge">
        <canvas baseChart
          [type]="'doughnut'"
          [data]="chartData"
          [options]="chartOptions">
        </canvas>
        <div class="gauge-value">{{ value }}%</div>
      </div>
    </div>
  `,
  styles: [`
    .gauge-container {
      text-align: center;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: white;
    }
    .gauge {
      position: relative;
      width: 150px;
      height: 150px;
      margin: 0 auto;
    }
    .gauge-value {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      font-weight: bold;
    }
  `]
})
export class AvailabilityGaugeComponent {
  @Input() title: string = '';
  @Input() value: number = 0;

  get chartData() {
    return {
      datasets: [{
        data: [this.value, 100 - this.value],
        backgroundColor: [
          this.getColor(this.value),
          '#f0f0f0'
        ],
        borderWidth: 0
      }]
    };
  }

  chartOptions = {
    cutout: '80%',
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    maintainAspectRatio: false
  };

  private getColor(value: number): string {
    if (value > 90) return '#4CAF50';
    if (value > 75) return '#FFC107';
    return '#F44336';
  }
}