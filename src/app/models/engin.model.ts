export interface Engin {
  id: number;
  type: string;
  modele: string;
  annee: number;
  numeroSerie: string;
  capacite: string;
  plaqueImmatriculation?: string;
  documents: DocumentEngin[];
  statut: 'disponible' | 'en mission' | 'en maintenance';
  dernierControle?: Date;
  prochaineMaintenance?: Date;
}

export interface DocumentEngin {
  type: string;
  dateExpiration: Date;
  fichier: string;
  notes?: string;
}