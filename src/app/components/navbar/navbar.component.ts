import { Component, HostListener, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule,RouterModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuCollapsed = true;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}
isCollapsed = true;
  scrolled = false;
  
  // Données dynamiques
  establishment = 'Établissement A';
  department = 'Service Manutention';
  userFullName = 'Nom et Prénom XXXX XXX';
  userRole = 'Administrateur';

    selectedService: string = 'manutention';
  selectedProfile: string = 'profile';


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}