export interface Maintenance {
    id: number;
    enginId: number;
    type: 'Préventive' | 'Curative' | 'Contrôle technique';
    dateDebut: Date;
    dateFin?: Date;
    description: string;
    cout: number;
    mecaniciens: number[];
    pieces: Piece[];
    statut: 'planifiée' | 'en cours' | 'terminée' | 'annulée';
    rapport?: string;
  }
  
  export interface Piece {
    reference: string;
    designation: string;
    quantite: number;
    prixUnitaire: number;
    fournisseur?: string;
  }