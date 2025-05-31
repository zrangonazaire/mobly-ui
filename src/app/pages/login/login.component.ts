import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      // Redirection explicite vers le dashboard
     
      this.router.navigate(['/dashboard']).then(success => {
        if (!success) {
          console.error('Échec de la navigation vers le dashboard');
        }
      });
    } else {
      this.errorMessage = 'Identifiants incorrects';
    }
  }
}