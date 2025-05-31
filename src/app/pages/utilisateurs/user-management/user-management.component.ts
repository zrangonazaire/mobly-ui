import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModalModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  users: any[] = [];
  roles = ['admin', 'gestionnaire', 'chauffeur', 'comptable'];
  newUser = {
    username: '',
    password: '',
    role: 'chauffeur',
    nom: ''
  };

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) {
    this.users = this.dataService.getUsers();
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  addUser() {
    // En production, vous utiliseriez un service backend
    const newId = Math.max(...this.users.map(u => u.id)) + 1;
    this.users.push({
      id: newId,
      ...this.newUser
    });
    this.resetForm();
    this.modalService.dismissAll();
  }

  resetForm() {
    this.newUser = {
      username: '',
      password: '',
      role: 'chauffeur',
      nom: ''
    };
  }

  getRoleBadgeClass(role: string) {
    switch(role) {
      case 'admin': return 'danger';
      case 'gestionnaire': return 'primary';
      case 'comptable': return 'info';
      default: return 'secondary';
    }
  }
}