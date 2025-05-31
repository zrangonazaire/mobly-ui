import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgbProgressbarModule, RouterModule,NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  stats: {
    enginsDisponibles: number;
    enginsEnMission: number;
    missionsEnCours: number;
    consommationMoyenne: number;
    alertes: number;
  } = {
    enginsDisponibles: 0,
    enginsEnMission: 0,
    missionsEnCours: 0,
    consommationMoyenne: 15.2,
    alertes: 2
  };

  recentFeuillesRoute: any[] = [];

  ngOnInit(): void {
    this.dataService.getEngins().subscribe(engins => {
      this.stats.enginsDisponibles = engins.filter(e => e.statut === 'disponible').length;
    });
    this.dataService.getEngins().pipe(
      map(engins => engins.filter(e => e.statut === 'en mission').length as number)
    ).subscribe(count => {
      this.stats.enginsEnMission = count;
    });
    this.stats.missionsEnCours = this.dataService.getFeuillesRoute().filter(f => f.statut === 'en cours').length;
    this.recentFeuillesRoute = this.dataService.getFeuillesRoute().slice(0, 5);
  }

  constructor(private dataService: DataService) {}
}