import { Injectable } from '@angular/core';
import { 
  Engin, 
  DocumentEngin 
} from '../models/engin.model';
import { 
  FeuilleRoute, 
  Voyage, 
  LettreVoiture 
} from '../models/feuille-route.model';
import { 
  Maintenance, 
  Piece 
} from '../models/maintenance.model';
import { 
  PleinCarburant,
  Consommation,
  AlerteConsommation
} from '../models/carburant.model';
import { 
  DossierClient, 
  Prestation 
} from '../models/dossier.model';
import { 
  Facture,
  PrestationFacture
} from '../models/facture.model';
import { PositionGPS } from '../models/position.model';
import { User } from '../models/user.model';
import { AuditLog } from '../models/audit.model';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getChauffeurs(): any[] {
    throw new Error('Method not implemented.');
  }
  // Données fictives pour la démo

  private engins: Engin[] = [
    {
      id: 1,
      type: 'Chariot élévateur',
      modele: 'Toyota 8FGU25',
      annee: 2020,
      numeroSerie: 'CE-TOY-2020-001',
      capacite: '2500 kg',
      plaqueImmatriculation: 'AA-123-AA',
      documents: [
        {
          type: 'Carte grise',
          dateExpiration: new Date('2025-12-31'),
          fichier: 'carte_grise_001.pdf'
        }
      ],
      statut: 'disponible',
      dernierControle: new Date('2023-10-15'),
      prochaineMaintenance: new Date('2024-01-15')
    },
    {
      id: 2,
      type: 'Tracteur routier',
      modele: 'Volvo FH16',
      annee: 2021,
      numeroSerie: 'TR-VOL-2021-001',
      capacite: '40000 kg',
      documents: [
        {
          type: 'Carte grise',
          dateExpiration: new Date('2026-06-30'),
          fichier: 'carte_grise_002.pdf'
        },
        {
          type: 'Assurance',
          dateExpiration: new Date('2024-06-30'),
          fichier: 'assurance_002.pdf'
        }
      ],
      statut: 'en mission'
    }
  ];

  private feuillesRoute: FeuilleRoute[] = [
    {
      id: 1,
      enginId: 2,
      chauffeurId: 3,
      dateDepart: new Date('2023-11-15T08:00:00'),
      voyages: [
        {
          id: 1,
          depart: 'Entrepôt principal',
          arrivee: 'Site client A',
          distance: 150,
          cargaison: 'Palettes de marchandises',
          client: 'Client A',
          dureeEstimee: 2.5
        }
      ],
      lettresVoiture: [
        {
          id: 1,
          numero: 'LV-2023-001',
          date: new Date('2023-11-15'),
          client: 'Client A',
          details: 'Transport de 10 palettes',
          documents: ['bon_commande_001.pdf']
        }
      ],
      statut: 'en cours'
    }
  ];

  private maintenances: Maintenance[] = [
    {
      id: 1,
      enginId: 1,
      type: 'Préventive',
      dateDebut: new Date('2023-11-10'),
      dateFin: new Date('2023-11-11'),
      description: 'Vidange et contrôle général',
      cout: 450,
      mecaniciens: [4, 5],
      pieces: [
        {
          reference: 'FILT-001',
          designation: 'Filtre à huile',
          quantite: 1,
          prixUnitaire: 35,
          fournisseur: 'AutoParts Inc.'
        }
      ],
      statut: 'terminée',
      rapport: 'Intervention réalisée sans anomalie'
    }
  ];

  private pleinsCarburant: PleinCarburant[] = [
    {
      id: 1,
      enginId: 2,
      date: new Date('2023-11-14'),
      volume: 120,
      kilometrage: 1850,
      prixLitre: 1.85,
      conducteurId: 3,
      lieu: 'Station Total, Paris'
    }
  ];

  private consommations: Consommation[] = [
    {
      enginId: 2,
      periode: new Date('2023-11-01'),
      consommationMoyenne: 32.5,
      alertes: [
        {
          id: 1,
          enginId: 2,
          date: new Date('2023-11-05'),
          type: 'surconsommation',
          niveau: 'moyen',
          resolved: false
        }
      ]
    }
  ];

  private dossiers: DossierClient[] = [
    {
      id: 1,
      reference: 'DOS-2023-001',
      client: 'Client A',
      dateCreation: new Date('2023-11-01'),
      statut: 'en cours',
      prestations: [
        {
          type: 'transport',
          description: 'Transport Paris-Lyon',
          quantite: 1,
          prixUnitaire: 1200,
          tvaApplicable: 20
        }
      ],
      montantHT: 1200,
      tva: 240,
      montantTTC: 1440,
      documents: ['devis_001.pdf']
    }
  ];

  private factures: Facture[] = [
    {
      id: 1,
      numero: 'FAC-2023-001',
      dossierId: 1,
      dateEmission: new Date('2023-11-10'),
      dateEcheance: new Date('2023-12-10'),
      montantHT: 1200,
      tva: 240,
      montantTTC: 1440,
      statut: 'envoyée',
      prestations: [
        {
          description: 'Transport Paris-Lyon',
          quantite: 1,
          prixUnitaire: 1200,
          tvaApplicable: 20
        }
      ]
    }
  ];

  private positionsGPS: PositionGPS[] = [
    {
      id: 1,
      enginId: 2,
      timestamp: new Date('2023-11-15T10:30:00'),
      latitude: 48.8566,
      longitude: 2.3522,
      vitesse: 80,
      niveauCarburant: 65,
      moteurAllume: true
    }
  ];

 // Dans src/app/services/data.service.ts
private users: User[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    nom: 'Administrateur',
    email: 'admin@entreprise.com'
  },
  {
    id: 3,
    username: 'chauffeur',
    password: 'chauf123',
    role: 'chauffeur',
    nom: 'Jean Dupont',
    permis: ['C', 'CE']
  }
];
  private auditLogs: AuditLog[] = [
    {
      id: 1,
      timestamp: new Date('2023-11-15T08:00:00'),
      userId: 1,
      username: 'admin',
      action: 'Connexion',
      details: 'Authentification réussie',
      ipAddress: '192.168.1.100'
    }
  ];

  // Méthodes d'accès aux données

  getEngins(): Observable<Engin[]> {
    return of(this.engins);
  }

  getEngin(id: number): Engin | undefined {
    return this.engins.find(e => e.id === id);
  }

  getFeuillesRoute(): FeuilleRoute[] {
    return this.feuillesRoute;
  }

  getFeuilleRoute(id: number): FeuilleRoute | undefined {
    return this.feuillesRoute.find(f => f.id === id);
  }

  getMaintenances(): Maintenance[] {
    return this.maintenances;
  }

  getMaintenance(id: number): Maintenance | undefined {
    return this.maintenances.find(m => m.id === id);
  }

  getPleinsCarburant(): PleinCarburant[] {
    return this.pleinsCarburant;
  }

  getConsommations(): Consommation[] {
    return this.consommations;
  }

  getDossiers(): DossierClient[] {
    return this.dossiers;
  }

  getDossier(id: number): DossierClient | undefined {
    return this.dossiers.find(d => d.id === id);
  }

  getFactures(): Facture[] {
    return this.factures;
  }

  getFacture(id: number): Facture | undefined {
    return this.factures.find(f => f.id === id);
  }

  getPositionsGPS(): PositionGPS[] {
    return this.positionsGPS;
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  getAuditLogs(): AuditLog[] {
    return this.auditLogs;
  }

  // Méthodes de mise à jour

  addEngin(engin: Omit<Engin, 'id'>): Engin {
    const newId = Math.max(...this.engins.map(e => e.id)) + 1;
    const newEngin: Engin = { id: newId, ...engin };
    this.engins.push(newEngin);
    return newEngin;
  }

  updateEngin(id: number, updates: Partial<Engin>): Engin | undefined {
    const index = this.engins.findIndex(e => e.id === id);
    if (index !== -1) {
      this.engins[index] = { ...this.engins[index], ...updates };
      return this.engins[index];
    }
    return undefined;
  }

  addFeuilleRoute(feuille: Omit<FeuilleRoute, 'id'>): FeuilleRoute {
    const newId = Math.max(...this.feuillesRoute.map(f => f.id)) + 1;
    const newFeuille: FeuilleRoute = { id: newId, ...feuille };
    this.feuillesRoute.push(newFeuille);
    return newFeuille;
  }

  // Autres méthodes de mise à jour similaires pour les autres entités...

  // Méthodes de recherche/filtrage

  getEnginsByStatus(status: Engin['statut']): Engin[] {
    return this.engins.filter(e => e.statut === status);
  }

  getFeuillesRouteByEngin(enginId: number): FeuilleRoute[] {
    return this.feuillesRoute.filter(f => f.enginId === enginId);
  }

  getMaintenancesByEngin(enginId: number): Maintenance[] {
    return this.maintenances.filter(m => m.enginId === enginId);
  }

  // Méthodes utilitaires

  generateFacture(dossierId: number): Facture {
    const dossier = this.getDossier(dossierId);
    if (!dossier) {
      throw new Error('Dossier non trouvé');
    }

    const newId = Math.max(...this.factures.map(f => f.id)) + 1;
    const newFacture: Facture = {
      id: newId,
      numero: `FAC-${new Date().getFullYear()}-${newId.toString().padStart(3, '0')}`,
      dossierId: dossier.id,
      dateEmission: new Date(),
      dateEcheance: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // +30 jours
      montantHT: dossier.montantHT,
      tva: dossier.tva,
      montantTTC: dossier.montantTTC,
      statut: 'brouillon',
      prestations: dossier.prestations.map(p => ({
        description: p.description,
        quantite: p.quantite,
        prixUnitaire: p.prixUnitaire,
        tvaApplicable: p.tvaApplicable
      }))
    };

    this.factures.push(newFacture);
    return newFacture;
  }
}