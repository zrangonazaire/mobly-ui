import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feuille-route-form',
  standalone: true,
  imports: [FormsModule, NgbDatepickerModule, NgbTimepickerModule, CommonModule],
  templateUrl: './feuille-route-form.component.html',
  styleUrls: ['./feuille-route-form.component.scss']
})
export class FeuilleRouteFormComponent {
  nouvelleFeuille = {
    enginId: null,
    chauffeurId: null,
    dateDepart: new Date(),
    voyages: [] as any[]
  };

  engins: any[];
  chauffeurs: any[];

  constructor(private dataService: DataService) {
    this.engins = this.dataService.getEngins();
    this.chauffeurs = this.dataService.getChauffeurs();
  }

  ajouterVoyage() {
    this.nouvelleFeuille.voyages.push({
      depart: '',
      arrivee: '',
      distance: 0,
      cargaison: ''
    });
  }

  soumettreFeuille() {
    // Implémentez la logique de soumission
    console.log('Feuille soumise:', this.nouvelleFeuille);
  }
}