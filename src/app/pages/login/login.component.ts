import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
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
  loginForm: FormGroup;


   

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      // Ajoutez ici votre logique d'authentification
    }
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

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