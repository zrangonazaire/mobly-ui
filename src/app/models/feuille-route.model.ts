export interface FeuilleRoute {
  id: number;
  enginId: number;
  chauffeurId: number;
  dateDepart: Date;
  dateRetour?: Date;
  voyages: Voyage[];
  lettresVoiture: LettreVoiture[];
  statut: 'planifiée' | 'en cours' | 'terminée' | 'annulée';
  notes?: string;
}

export interface Voyage {
  id: number;
  depart: string;
  arrivee: string;
  distance: number;
  cargaison: string;
  client: string;
  dureeEstimee: number; // en heures
}

export interface LettreVoiture {
  id: number;
  numero: string;
  date: Date;
  client: string;
  details: string;
  documents: string[];
}