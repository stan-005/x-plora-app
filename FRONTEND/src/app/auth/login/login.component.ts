import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../core/services/notification.service';
import { NotificationComponent } from '../../notification/notification.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink,NavbarComponent, FormsModule, ReactiveFormsModule, NotificationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe(
        response => {
          // Handle successful login
          localStorage.setItem('token', response.token);
          if (response.isAdmin) {
            this.notificationService.notify('Admin logged in successfully', 'success');
            this.router.navigate(['/admin']);
          } else if (response.role === 'user') {
            this.notificationService.notify('User logged in successfully', 'success');
            this.router.navigate(['/user']);
          }
        },
        error => {
          // Handle login error
          this.notificationService.notify('Login failed','error');
        }
      );
    }
  }
}