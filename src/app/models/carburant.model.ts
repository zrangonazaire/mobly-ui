export interface PleinCarburant {
    id: number;
    enginId: number;
    date: Date;
    volume: number; // en litres
    kilometrage: number;
    prixLitre: number;
    conducteurId: number;
    lieu: string;
    justificatif?: string;
    notes?: string;
  }
  
  export interface Consommation {
    enginId: number;
    periode: Date;
    consommationMoyenne: number; // L/100km
    alertes: AlerteConsommation[];
  }
  
  export interface AlerteConsommation {
    id: number;
    enginId: number;
    date: Date;
    type: 'surconsommation' | 'sous-consommation' | 'vol suspect';
    niveau: 'faible' | 'moyen' | 'élevé';
    resolved: boolean;
  }