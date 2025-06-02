import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import * as L from 'leaflet';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-gps-map',
  standalone: true,
  imports: [CommonModule,NavbarComponent,SidebarComponent],
  templateUrl: './gps-map.component.html',
  styleUrls: ['./gps-map.component.scss']
})
export class GpsMapComponent implements AfterViewInit {
  private map: any;
  private positions: any[] = [];
  private engins: any[] = [];

  constructor(private dataService: DataService) {
    this.positions = this.dataService.getPositionsGPS();
    this.dataService.getEngins().subscribe(engins => {
      this.engins = engins;
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.plotPositions();
  }

  private initMap(): void {
    this.map = L.map('map').setView([48.8566, 2.3522], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private plotPositions(): void {
    this.positions.forEach(pos => {
      const engin = this.engins.find(e => e.id === pos.enginId);
      const icon = L.divIcon({
        html: `<i class="bi bi-truck text-danger fs-5"></i>`,
        iconSize: [24, 24],
        className: ''
      });

      L.marker([pos.latitude, pos.longitude], { icon })
        .addTo(this.map)
        .bindPopup(`
          <strong>${engin?.type} ${engin?.modele}</strong><br>
          <small>${new Date(pos.timestamp).toLocaleString()}</small>
        `);
    });
  }
}