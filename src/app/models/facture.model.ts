export interface Facture {
    id: number;
    numero: string;
    dossierId: number;
    dateEmission: Date;
    dateEcheance: Date;
    montantHT: number;
    tva: number;
    montantTTC: number;
    statut: 'brouillon' | 'envoyée' | 'payée' | 'annulée';
    modePaiement?: 'virement' | 'chèque' | 'carte';
    datePaiement?: Date;
    prestations: PrestationFacture[];
  }
  
  export interface PrestationFacture {
    description: string;
    quantite: number;
    prixUnitaire: number;
    tvaApplicable: number;
  }