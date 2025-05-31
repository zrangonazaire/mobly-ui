import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
 
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component:DashboardComponent },
      { path: 'engins', loadComponent: () => import('./pages/engins/engins.component').then(m => m.EnginsComponent) },
      { path: 'feuilles-route', loadComponent: () => import('./pages/feuilles-route/feuilles-route.component').then(m => m.FeuillesRouteComponent) },
      { path: 'maintenance', loadComponent: () => import('./pages/maintenance/maintenance-list/maintenance-list.component').then(m => m.MaintenanceListComponent) },
      { path: 'carburant', loadComponent: () => import('./pages/carburant/carburant.component').then(m => m.CarburantComponent) },
      { path: 'facturation', loadComponent: () => import('./pages/facturation/facturation/facturation.component').then(m => m.FacturationComponent) },
      { path: 'suivi-gps', loadComponent: () => import('./pages/suivi-gps/gps-map/gps-map.component').then(m => m.GpsMapComponent) },
      { path: 'utilisateurs', loadComponent: () => import('./pages/utilisateurs/utilisateurs.component').then(m => m.UtilisateursComponent) },
      { path: 'dossiers', loadComponent: () => import('./pages/dossiers/dossiers.component').then(m => m.DossiersComponent) },
      { path: 'audit', loadComponent: () => import('./pages/audit/audit.component').then(m => m.AuditComponent) },
      { path: 'parametres', loadComponent: () => import('./pages/parametres/parametres.component').then(m => m.ParametresComponent) },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },

];