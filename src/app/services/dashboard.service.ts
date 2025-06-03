import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getAdminAvailability() {
    return of(85); // Valeur simulée
  }

  getMechanicalAvailability() {
    return of(92); // Valeur simulée
  }

  getFullAvailabilityEquipment() {
    return of({
      total: 15,
      list: ['Engin-001', 'Engin-005', 'Engin-008', 'Engin-012', 'Engin-015']
    });
  }

  getAlertEquipment() {
    return of([
      { id: 'Engin-002', status: 'Alerte', link: '/equipment/Engin-002' },
      { id: 'Engin-003', status: 'Bloqué', link: '/equipment/Engin-003' },
      { id: 'Engin-007', status: 'Alerte', link: '/equipment/Engin-007' }
    ]);
  }

  getHistoricalData() {
    return of({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      adminData: [80, 82, 85, 83, 86, 85],
      mechData: [88, 90, 91, 89, 92, 92]
    });
  }

  getDocumentsToRenew() {
    return of([
      { id: 'Engin-004', document: 'Assurance', expiry: '2023-12-15' },
      { id: 'Engin-006', document: 'Contrôle technique', expiry: '2023-11-30' },
      { id: 'Engin-009', document: 'Permis de circuler', expiry: '2024-01-10' }
    ]);
  }
}