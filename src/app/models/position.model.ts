export interface PositionGPS {
    id: number;
    enginId: number;
    timestamp: Date;
    latitude: number;
    longitude: number;
    vitesse?: number; // en km/h
    niveauCarburant?: number; // en %
    moteurAllume?: boolean;
  }