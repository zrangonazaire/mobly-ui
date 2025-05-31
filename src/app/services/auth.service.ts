// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authenticated = false;
  private currentUser: User | null = null;
  private users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin123',
      role: 'admin',
      nom: 'Administrateur',
      email: 'admin@entreprise.com',
      token: 'fake-jwt-token-admin'
    },
    {
      id: 2,
      username: 'gestionnaire',
      password: 'gest123',
      role: 'gestionnaire',
      nom: 'Gestionnaire Parc',
      email: 'gestion@entreprise.com',
      token: 'fake-jwt-token-gestion'
    },
    {
      id: 3,
      username: 'chauffeur',
      password: 'chauf123',
      role: 'chauffeur',
      nom: 'Chauffeur Dupont',
      permis: ['C', 'CE'],
      actif: true,
      token: 'fake-jwt-token-driver'
    }
  ];
 // Méthode de déconnexion
 logout(): void {
  localStorage.removeItem('currentUser');
  this.currentUser = null;
  this.router.navigate(['/login']);
}
// Récupère l'utilisateur courant
getCurrentUser(): User | null {
  if (!this.currentUser) {
    const user = localStorage.getItem('currentUser');
    this.currentUser = user ? JSON.parse(user) : null;
  }
  return this.currentUser;
}
 // Méthode de connexion
 login(username: string, password: string): boolean {
  const user = this.users.find(u => 
    u.username === username && u.password === password
  );
  
  if (user) {
    this.authenticated = true;
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true; // Retourne true si login réussi
  }
  return false;
}
  // Vérifie si l'utilisateur est authentifié
  isAuthenticated(): boolean {
   
    return this.authenticated;
  }

  // Vérifie si l'utilisateur a un rôle spécifique
  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === role : false;
  }
  constructor(private router: Router) {}

  // ... reste des méthodes inchangé
}