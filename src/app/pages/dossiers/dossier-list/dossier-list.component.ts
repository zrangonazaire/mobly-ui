import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dossier-list',
  standalone: true,
  imports: [    CommonModule,
    FormsModule, RouterModule, NgbDropdownModule],
  templateUrl: './dossier-list.component.html',
  styleUrls: ['./dossier-list.component.scss']
})
export class DossierListComponent {
  dossiers: any[] = [];
  filter = {
    statut: 'tous',
    client: ''
  };
  constructor(@Inject(DataService) private dataService: DataService) {
    this.dossiers = this.dataService.getDossiers();
  }

  get filteredDossiers() {
    return this.dossiers.filter(d => 
      (this.filter.statut === 'tous' || d.statut === this.filter.statut) &&
      (this.filter.client === '' || d.client.toLowerCase().includes(this.filter.client.toLowerCase()))
    );
  }

  getStatusClass(statut: string): string {
    switch(statut) {
      case 'ouvert': return 'warning';
      case 'en cours': return 'info';
      case 'facturé': return 'success';
      case 'clôturé': return 'secondary';
      default: return 'primary';
    }
  }
}