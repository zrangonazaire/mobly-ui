import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FeuilleRoute } from '../../models/feuille-route.model';
import { User } from '../../models/user.model';
import { Engin } from '../../models/engin.model';
//import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-feuilles-route',
  standalone: true,
  imports: [NavbarComponent, CommonModule,
    RouterModule],
  templateUrl: './feuilles-route.component.html',
  styleUrl: './feuilles-route.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeuillesRouteComponent {
  feuillesRoute: FeuilleRoute[] = [];
  loading: boolean = true;

  statusOptions = [
    { label: 'Tous', value: null },
    { label: 'Planifiée', value: 'planifiée' },
    { label: 'En cours', value: 'en cours' },
    { label: 'Terminée', value: 'terminée' }
  ];
  selectedStatus: any;
routeSheets: any;
user:User | undefined;
engin:Engin | undefined;
  constructor(
    private dataService: DataService,
    //private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadFeuillesRoute();
  }

  loadFeuillesRoute(): void {
    this.loading = true;
    this.feuillesRoute = this.dataService.getFeuillesRoute();
    this.user= this.dataService.getUser(this.feuillesRoute[0].chauffeurId);
    this.engin = this.dataService.getEngin(this.feuillesRoute[0].enginId);
    this.loading = false;
  }

  getStatusSeverity(status: string): string {
    switch (status) {
      case 'planifiée': return 'warning';
      case 'en cours': return 'info';
      case 'terminée': return 'success';
      default: return 'secondary';
    }
  }

  generateWaybill(id: number): void {
    // Implémentation de la génération de lettre de voiture
    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Succès',
    //   detail: 'Lettre de voiture générée'
    // });
  }
}
