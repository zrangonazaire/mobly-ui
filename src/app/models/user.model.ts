// src/app/models/user.model.ts
export interface User {
  id: number;
  username: string;
  password: string;
  role: 'admin' | 'gestionnaire' | 'chauffeur' | 'technicien';
  nom: string;
  email?: string;  // Optionnel
  token?: string;  // Optionnel
  permis?: string[]; // Optionnel
  actif?: boolean; // Optionnel
}