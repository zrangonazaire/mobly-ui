import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-carburant-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './carburant-list.component.html',
  styleUrls: ['./carburant-list.component.scss']
})
export class CarburantListComponent {
  pleins: any[] = [];
  engins: any[] = [];

  // Données pour le graphique
  chartData = {
    labels: this.pleins.map(p => new Date(p.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Volume (L)',
        data: this.pleins.map(p => p.volume),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }
    ]
  };

  chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  constructor(private dataService: DataService) {}

  getEngin(id: number) {
    return this.engins.find(e => e.id === id);
  }

  calculerConso(plein: any): number {
    // Logique simplifiée de calcul de consommation
    return Math.round((plein.volume / plein.kilometrage) * 100 * 100) / 100;
  }
}