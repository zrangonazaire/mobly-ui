export interface DossierClient {
    id: number;
    reference: string;
    client: string;
    dateCreation: Date;
    dateCloture?: Date;
    statut: 'ouvert' | 'en cours' | 'facturé' | 'clôturé';
    prestations: Prestation[];
    montantHT: number;
    tva: number;
    montantTTC: number;
    documents: string[];
    notes?: string;
  }
  
  export interface Prestation {
    type: 'transport' | 'manutention' | 'stockage';
    description: string;
    quantite: number;
    prixUnitaire: number;
    tvaApplicable: number;
  }